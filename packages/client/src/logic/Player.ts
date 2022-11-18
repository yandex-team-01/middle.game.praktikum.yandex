import { Sprite } from './Sprite';
import { Position, AllSpritesType, GameEntities } from './types';
import { SPRITE_ID } from './const';
import { Game } from './Game';

const playerCurrentDirections: boolean[] = [];

enum DirectionPlayerButtons {
  Up = 38,
  Down = 40,
  Left = 37,
  Right = 39,
}

enum DirectionPlayer { 
  Down = 0,
  Left,
  Right,
  Up
}

abstract class Player {
  movePlayer!: () => void;
  spriteHeart: Sprite | undefined;
  spriteMoney: Sprite | undefined;
  spritePlayer: Sprite | undefined;
  x: number;
  y: number;
  width: number;
  height: number;
  skinLegsFrame: number;
  skinDirectionFrame: number;
  speed: number;
  isMoving: boolean;
  canvasHeight: number;
  canvasWidth: number;
  ctx: CanvasRenderingContext2D;
  hitPoints: number;
  score: number;
  game: Game;
  totalNumberOfLegsMovementFrames = 4;
  firstLegsMovementFrame = 0;

  constructor(
    ctx: CanvasRenderingContext2D,
    canvasHeight: number,
    canvasWidth: number,
    game: Game
  ) {
    // очки жизни, после 3 столкновений игрок "умирает"
    this.hitPoints = 3;
    // счет очков
    this.score = 0;

    this.width = 0;
    this.height = 0;
    this.x = 0;
    this.y = 0;
    this.skinLegsFrame = 0;
    this.skinDirectionFrame = 0;
    this.speed = 5;
    this.isMoving = false;
    this.ctx = ctx;
    this.canvasHeight = canvasHeight;
    this.canvasWidth = canvasWidth;
    this.game = game;
  }
  animate() {
    this.movePlayer();
    this.handlePlayerLegsFrame();
  }

  setSprite(sprites: AllSpritesType) {
    this.spriteHeart = sprites[SPRITE_ID.HEART];
    this.spriteMoney = sprites[SPRITE_ID.MONEY];
    this.spritePlayer = sprites[SPRITE_ID.PLAYER];
    this.width = this.spritePlayer.width;
    this.height = this.spritePlayer.height;
  }

  subtractHP() {
    this.hitPoints = this.hitPoints - 1;
    if (this.hitPoints === 0) {
      this.game.end();
    }
  }

  addScore(bonus: number) {
    this.score = this.score + bonus;
  }

  handlePlayerLegsFrame() {
    if (
      this.skinLegsFrame < this.totalNumberOfLegsMovementFrames &&
      this.isMoving
    ) {
      this.skinLegsFrame++;
    } else {
      this.skinLegsFrame = this.firstLegsMovementFrame;
    }
  }

  renderHPandScore(ctx: CanvasRenderingContext2D) {
    if (!this.spriteHeart || !this.spriteMoney) {
      return;
    }

    // отрисовка Score
    ctx.drawImage(
      this.spriteMoney.image,
      this.canvasWidth - 100,
      10,
      this.spriteMoney.width,
      this.spriteMoney.height
    );

    ctx.font = '30px PixelDigivolve';
    ctx.fillText(`${this.score}`, this.canvasWidth - 50, 40);

    // отрисовка HP
    const defineX = 5;
    const defineY = 5;

    this.hitPoints;

    for (let i = 0; i < this.hitPoints; i++) {
      ctx.drawImage(
        this.spriteHeart.image,
        defineX + this.spriteHeart.width * i,
        defineY,
        this.spriteHeart.width,
        this.spriteHeart.height
      );
    }
  }

  render() {
    if (!this.spritePlayer) {
      return;
    }

    this.ctx.drawImage(
      this.spritePlayer.image,
      this.width * this.skinLegsFrame,
      this.height * this.skinDirectionFrame,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
    this.ctx.strokeRect(this.x, this.y, this.width, this.height);
    this.renderHPandScore(this.ctx);
    this.animate();
  }

  getPosition(): Position {
    return {
      x1: this.x,
      x2: this.x + this.width,
      y1: this.y,
      y2: this.y + this.height,
    };
  }
}

export class PlayerOne extends Player {
  constructor(
    ctx: CanvasRenderingContext2D,
    canvasHeight: number,
    canvasWidth: number,
    { game }: GameEntities
  ) {
    super(ctx, canvasHeight, canvasWidth, game);
    this.x = 100;
    this.y = 400;
    this.ctx = ctx;
    this.canvasHeight = canvasHeight;
    this.canvasWidth = canvasWidth;

    //TODO: вынести подписку на события в отдельный controll
    window.addEventListener('keydown', this.keyDownCustom);
    window.addEventListener('keyup', this.keyUpCustom);
  }

  keyDownCustom = (...args: KeyboardEvent[]) => {
    if (args.length > 0) {
      const event = args[0];
      playerCurrentDirections[event.keyCode] = true;
    }
  };

  keyUpCustom = (...args: KeyboardEvent[]) => {
    if (args.length > 0) {
      const event = args[0];
      playerCurrentDirections[event.keyCode] = false;
      this.isMoving = false;
    }
  };

  movePlayer = () => {
    if (this.y !== undefined && this.x !== undefined) {
      if (playerCurrentDirections[DirectionPlayerButtons.Up] && this.y > 100) {
        this.y -= this.speed;
        this.skinDirectionFrame = DirectionPlayer.Up;
        this.isMoving = true;
      }
      if (playerCurrentDirections[DirectionPlayerButtons.Left] && this.x > 0) {
        this.x -= this.speed;
        this.skinDirectionFrame = DirectionPlayer.Left;
        this.isMoving = true;
      }
      if (
        playerCurrentDirections[DirectionPlayerButtons.Down] &&
        this.y < this.canvasHeight - this.height
      ) {
        this.y += this.speed;
        this.skinDirectionFrame = DirectionPlayer.Down;
        this.isMoving = true;
      }
      if (
        playerCurrentDirections[DirectionPlayerButtons.Right] &&
        this.x < this.canvasWidth - this.width
      ) {
        this.x += this.speed;
        this.skinDirectionFrame = DirectionPlayer.Right;
        this.isMoving = true;
      }
    }
  };
}
