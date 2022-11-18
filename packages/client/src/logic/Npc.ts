import { Sprite } from './Sprite';
import { NpcConstructorOptions, Position } from './types';
import { PlayerOne } from './Player';

enum DirectionNpc {
  Down = 0,
  Left,
  Right,
  Up,
}

enum Direction {
  Horizontal = 0,
  Vertical,
}

export abstract class NpcModel {
  id: number;
  type: string;
  sprite: Sprite | undefined;
  x: number;
  y: number;
  width: number;
  height: number;
  skinLegsFrame: number;
  skinDirectionFrame: number;
  xSpeed: number;
  ySpeed: number;
  canvasHeight = 0;
  canvasWidth = 0;
  npcCurrentDirections: boolean[] = [];
  totalNumberOfLegsMovementFrames = 3;
  firstLegsMovementFrame = 0;

  constructor(options: NpcConstructorOptions) {
    this.id = options.id;
    this.type = options.type;
    this.x = options.defaultX;
    this.y = options.defaultY;
    this.width = 0;
    this.height = 0;
    this.skinLegsFrame = 0;
    this.skinDirectionFrame = 0;
    this.xSpeed = 6;
    this.ySpeed = 6;

  }

  setSprite(sprite: Sprite) {
    this.sprite = sprite;
    this.width = sprite.width;
    this.height = sprite.height;
    this.skinLegsFrame = 0;
    this.skinDirectionFrame = 0;
  }

  getPosition(): Position {
    return {
      x1: this.x,
      x2: this.x + this.width,
      y1: this.y,
      y2: this.y + this.height,
    };
  }

  render(
    ctx: CanvasRenderingContext2D,
    canvasHeight: number,
    canvasWidth: number
  ) {
    if (!this.sprite) {
      return;
    }
    this.canvasHeight = canvasHeight;
    this.canvasWidth = canvasWidth;
    ctx.drawImage(
      this.sprite.image,
      this.width * this.skinLegsFrame,
      this.height * this.skinDirectionFrame,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
    ctx.strokeRect(this.x, this.y, this.width, this.height);
    this.animate();
  }

  animate() {
    this.updateNpcCoordinates();
    this.checkForCollisionsWithCanvasBorders();
    this.moveNpc();
    this.handleNpcLegsFrame();
  }
  /*eslint-disable */
  updateNpcCoordinates(){}
  /*eslint-enable */

  toggleNpcDirection(direction: number) {
    //меняем флаг направления анимации ног влево-вправо
    if (direction === Direction.Horizontal) {
      if (this.npcCurrentDirections[DirectionNpc.Right]) {
        this.npcCurrentDirections[DirectionNpc.Right] = false;
        this.npcCurrentDirections[DirectionNpc.Left] = true;
      } else {
        this.npcCurrentDirections[DirectionNpc.Left] = false;
        this.npcCurrentDirections[DirectionNpc.Right] = true;
      }
    }
    if (direction === Direction.Vertical) {
      //меняем флаг направления анимации ног вверх-вниз
      if (this.npcCurrentDirections[DirectionNpc.Down]) {
        this.npcCurrentDirections[DirectionNpc.Down] = false;
        this.npcCurrentDirections[DirectionNpc.Up] = true;
      } else {
        this.npcCurrentDirections[DirectionNpc.Up] = false;
        this.npcCurrentDirections[DirectionNpc.Down] = true;
      }
    }
  }
<<<<<<< HEAD
  checkForCollisions() {
    if (this.x + this.width > this.canvasWidth || this.x - this.width / 2 < 0) {
      this.xSpeed = -this.xSpeed;
      this.toggleNpcDirection(Direction.Horizontal);
    }
    if (
      this.y + this.height > this.canvasHeight ||
      this.y - this.height / 2 < 0
    ) {
      this.ySpeed = -this.ySpeed;
      this.toggleNpcDirection(Direction.Vertical);
    }
=======
  
  checkForCollisionsWithCanvasBorders() {
    if ( this.x + this.width > this.canvasWidth || this.x - this.width / 2  < 0 ) {
        this.xSpeed = -this.xSpeed;
        this.toggleNpcDirection(Direction.Horizontal);
    }
    if ( this.y + this.height > this.canvasHeight || this.y - this.height / 2 < 70 ) {
        this.ySpeed = -this.ySpeed;
        this.toggleNpcDirection(Direction.Vertical);
    }   
>>>>>>> added a timer to the logic of the game
  }

  handleNpcLegsFrame() {
    if (this.skinLegsFrame < this.totalNumberOfLegsMovementFrames) {
      this.skinLegsFrame++;
    } else {
      this.skinLegsFrame = this.firstLegsMovementFrame;
    }
  }

  moveNpc() {
    if (this.npcCurrentDirections[DirectionNpc.Up] && this.y > 100) {
      this.skinDirectionFrame = DirectionNpc.Up;
    }
    if (this.npcCurrentDirections[DirectionNpc.Left] && this.x > 0) {
      this.skinDirectionFrame = DirectionNpc.Left;
    }
    if (
      this.npcCurrentDirections[DirectionNpc.Down] &&
      this.y < this.canvasHeight - this.height
    ) {
      this.skinDirectionFrame = DirectionNpc.Down;
    }
    if (
      this.npcCurrentDirections[DirectionNpc.Right] &&
      this.x < this.canvasWidth - this.width
    ) {
      this.skinDirectionFrame = DirectionNpc.Right;
    }
  }
}

export class NpcEnemy extends NpcModel {
  constructor(options: NpcConstructorOptions) {
    super(options);
    this.startMoving();
  }

  startMoving(){
    //начинаем движение вправо-вниз
    this.npcCurrentDirections[DirectionNpc.Right] = true;
    this.npcCurrentDirections[DirectionNpc.Down] = true;
  }
  updateNpcCoordinates() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }
  collisionHandling(player: PlayerOne) {
    player.subtractHP();
  }
}

export class NpcFriend extends NpcModel {
  defineBonus: number;

  constructor(options: NpcConstructorOptions) {
    super(options);
    this.defineBonus = 5;
    this.startMoving();
  }

  updateNpcCoordinates() {
    this.x -= this.xSpeed;
    this.y -= this.ySpeed;
  }

  collisionHandling(player: PlayerOne) {
    player.addScore(this.defineBonus);
  }
  startMoving(){
    //начинаем движение вправо-вниз
    this.npcCurrentDirections[DirectionNpc.Left] = true;
    this.npcCurrentDirections[DirectionNpc.Up] = true;
  }
}
