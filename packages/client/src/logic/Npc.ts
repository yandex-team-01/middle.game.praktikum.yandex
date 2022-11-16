import { Sprite } from './Sprite';
import { NpcConstructorOptions, Position } from './types';
import { PlayerOne } from './Player';

export abstract class NpcModel {
  id: number;
  type: string;
  sprite: Sprite | undefined;
  x: number;
  y: number;
  width: number;
  height: number;
  frameX: number;
  frameY: number;

  constructor(options: NpcConstructorOptions) {
    this.id = options.id;
    this.type = options.type;
    this.x = options.defaultX;
    this.y = options.defaultY;
    this.width = 0;
    this.height = 0;
    this.frameX = 0;
    this.frameY = 0;
  }

  setSprite(sprite: Sprite) {
    this.sprite = sprite;
    this.width = sprite.width;
    this.height = sprite.height;
    this.frameX = 0;
    this.frameY = 0;
  }

  getPosition(): Position {
    return {
      x1: this.x,
      x2: this.x + this.width,
      y1: this.y,
      y2: this.y + this.height,
    };
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
    ctx.strokeRect(this.x, this.y, this.width, this.height);
  }
}

export class NpcEnemy extends NpcModel {
  constructor(options: NpcConstructorOptions) {
    super(options);
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
  }

  collisionHandling(player: PlayerOne) {
    player.addScore(this.defineBonus);
  }
}
