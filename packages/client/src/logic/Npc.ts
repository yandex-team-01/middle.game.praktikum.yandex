import { Sprite } from './Sprite';
import { NpcConstructorOptions, Position } from './types';
import { PlayerOne } from './Player';

export enum DirectionNpc {
  Down = 0,
  Left,
  Right,
  Up,
}

export enum Direction {
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
  speed: number;
  isMoving: boolean;
  canvasHeight: number;
  canvasWidth: number;
  npcCurrentDirections: boolean[] = [];
  totalNumberOfLegsMovementFrames = 3;
  firstLegsMovementFrame = 0;
  ctx: CanvasRenderingContext2D;
  hasCollision = false;

  constructor(
    ctx: CanvasRenderingContext2D,
    options: NpcConstructorOptions,
    canvasHeight: number,
    canvasWidth: number
  ) {
    this.ctx = ctx;
    this.id = options.id;
    this.type = options.type;
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
    this.skinLegsFrame = 0;
    this.skinDirectionFrame = 0;
    this.speed = 6;
    this.canvasHeight = canvasHeight;
    this.canvasWidth = canvasWidth;
    this.isMoving = true;
    this.startMoving();
  }

  getRandomPosition(a: number, b: number, isY = false) {
    let position = Math.min(a, Math.random() * b);
    if (isY) {
      while (position < 210) {
        position = Math.min(a, Math.random() * b);
      }
    }
    return position;
  }

  setSprite(sprite: Sprite) {
    const randomX = this.getRandomPosition(
      this.canvasWidth - sprite.width,
      this.canvasWidth
    );
    const randomY = this.getRandomPosition(
      this.canvasHeight - sprite.height,
      this.canvasHeight,
      true
    );

    this.sprite = sprite;
    this.width = sprite.width;
    this.height = sprite.height;

    this.x = randomX;
    this.y = randomY;
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

  render() {
    if (!this.sprite) {
      return;
    }

    this.ctx.drawImage(
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
    this.animate();
  }

  animate() {
    this.correctCollisionResult();
    this.checkForCollisionsWithCanvasBorders();
    this.moveNpc();
    this.handleNpcLegsFrame();
  }

  getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  correctCollisionResult() {
    if (!this.isMoving) {
      //после первого столкновения меняем направление движения на противоположное
      //если это не помогло то устанавливаем рандомное направление движения
      if (!this.hasCollision) {
        this.toggleNpcDirection(Direction.Horizontal);
        this.toggleNpcDirection(Direction.Vertical);
        this.hasCollision = true;
      } else {
        this.npcCurrentDirections = [];
        this.startMoving();
        this.hasCollision = false;
      }
    }
    this.isMoving = true;
  }

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

  checkForCollisionsWithCanvasBorders() {
    if (this.x + this.width > this.canvasWidth || this.x - this.width / 2 < 0) {
      if (!this.hasCollision) {
        this.toggleNpcDirection(Direction.Horizontal);
        this.hasCollision = true;
      } else {
        this.isMoving = false;
      }
    }
    if (
      this.y + this.height > this.canvasHeight ||
      this.y - this.height / 2 < 70
    ) {
      if (!this.hasCollision) {
        this.toggleNpcDirection(Direction.Vertical);
        this.hasCollision = true;
      } else {
        this.isMoving = false;
      }
    }
  }

  handleNpcLegsFrame() {
    if (
      this.skinLegsFrame < this.totalNumberOfLegsMovementFrames &&
      this.isMoving
    ) {
      this.skinLegsFrame++;
    } else {
      this.skinLegsFrame = this.firstLegsMovementFrame;
    }
  }

  moveNpc() {
    if (
      this.npcCurrentDirections[DirectionNpc.Up] &&
      this.y > 100 &&
      this.isMoving
    ) {
      this.skinDirectionFrame = DirectionNpc.Up;
      this.y -= this.speed;
    }
    if (
      this.npcCurrentDirections[DirectionNpc.Left] &&
      this.x > 0 &&
      this.isMoving
    ) {
      this.skinDirectionFrame = DirectionNpc.Left;
      this.x -= this.speed;
    }
    if (
      this.npcCurrentDirections[DirectionNpc.Down] &&
      this.y < this.canvasHeight - this.height &&
      this.isMoving
    ) {
      this.y += this.speed;
      this.skinDirectionFrame = DirectionNpc.Down;
    }
    if (
      this.npcCurrentDirections[DirectionNpc.Right] &&
      this.x < this.canvasWidth - this.width &&
      this.isMoving
    ) {
      this.skinDirectionFrame = DirectionNpc.Right;
      this.x += this.speed;
    }
  }
  startMoving() {
    const horizontalDirection = [DirectionNpc.Left, DirectionNpc.Right][
      Math.round(Math.random())
    ];
    const verticalDirection = [DirectionNpc.Up, DirectionNpc.Down][
      Math.round(Math.random())
    ];
    this.npcCurrentDirections[horizontalDirection] = true;
    this.npcCurrentDirections[verticalDirection] = true;
  }
}

export class NpcEnemy extends NpcModel {
  constructor(
    ctx: CanvasRenderingContext2D,
    options: NpcConstructorOptions,
    canvasHeight: number,
    canvasWidth: number
  ) {
    super(ctx, options, canvasHeight, canvasWidth);
    this.ctx = ctx;
    this.speed = 8;
  }

  collisionHandling(player: PlayerOne) {
    player.subtractHP();
  }
}

export class NpcFriend extends NpcModel {
  defineBonus: number;

  constructor(
    ctx: CanvasRenderingContext2D,
    options: NpcConstructorOptions,
    canvasHeight: number,
    canvasWidth: number
  ) {
    super(ctx, options, canvasHeight, canvasWidth);
    this.ctx = ctx;
    this.defineBonus = 1;
  }

  collisionHandling(player: PlayerOne) {
    player.addScore(this.defineBonus);
  }
}
