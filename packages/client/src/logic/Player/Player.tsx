import { Sprite } from '../Sprite';
import { Position } from '../types';

const keys: boolean[] = [];

enum DirectionPlayerOne {
  Up = 38,
  Down = 40,
  Left = 37,
  Right = 39,
}

abstract class Player {
  movePlayer!: () => void;

  sprite: Sprite | undefined;
  x: number;
  y: number;
  width: number;
  height: number;
  frameX: number;
  frameY: number;
  speed: number;
  moving: boolean;
  canvasHeight: number;
  canvasWidth: number;
  ctx: CanvasRenderingContext2D;

  constructor(
    ctx: CanvasRenderingContext2D,
    canvasHeight: number,
    canvasWidth: number
  ) {
    this.width = 0;
    this.height = 0;
    this.x = 0;
    this.y = 0;

    this.frameX = 0;
    this.frameY = 0;
    this.speed = 7;
    this.moving = false;

    this.ctx = ctx;
    this.canvasHeight = canvasHeight;
    this.canvasWidth = canvasWidth;
  }
  animate() {
    this.movePlayer();
    this.handlePlayerFrame();
  }

  setSprite(sprite: Sprite) {
    this.sprite = sprite;
    this.width = sprite.width;
    this.height = sprite.height;
  }

  handlePlayerFrame() {
    if (this.frameX < 3 && this.moving) {
      this.frameX++;
    } else {
      this.frameX = 0;
    }
  }

  render(ctx: CanvasRenderingContext2D) {
    if (!this.sprite) {
      return;
    }

    ctx.drawImage(
      this.sprite.image,
      this.width * this.frameX,
      this.height * this.frameY,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
    this.ctx?.strokeRect(this.x, this.y, this.width, this.height);
    this.animate();
  }

  get position(): Position {
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
    canvasWidth: number
  ) {
    super(ctx, canvasHeight, canvasWidth);
    this.x = 200;
    this.y = 150;

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
      keys[event.keyCode] = true;
    }
  };

  keyUpCustom = (...args: KeyboardEvent[]) => {
    if (args.length > 0) {
      const event = args[0];
      delete keys[event.keyCode];
      this.moving = false;
    }
  };

  movePlayer = () => {
    if (this.y !== undefined && this.x !== undefined) {
      if (keys[DirectionPlayerOne.Up] && this.y > 100) {
        this.y -= this.speed;
        this.frameY = 3;
        this.moving = true;
      }
      if (keys[DirectionPlayerOne.Left] && this.x > 0) {
        this.x -= this.speed;
        this.frameY = 1;
        this.moving = true;
      }
      if (
        keys[DirectionPlayerOne.Down] &&
        this.y < this.canvasHeight - this.height
      ) {
        this.y += this.speed;
        this.frameY = 0;
        this.moving = true;
      }
      if (
        keys[DirectionPlayerOne.Right] &&
        this.x < this.canvasWidth - this.width
      ) {
        this.x += this.speed;
        this.frameY = 2;
        this.moving = true;
      }
    }
  };
}
