import { Sprite } from './Sprite';
import { NpcConstructorOptions, Position } from './types';
import { defaultOptionNpc } from './const';

export class NpcControll {
  arrNpc: Npc[];
  sprite: Sprite | undefined;
  width: number;
  height: number;
  frameX: number;
  frameY: number;

  constructor() {
    // временно вывожу массив npc
    this.arrNpc = defaultOptionNpc.map(option => new Npc(option));
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
    this.arrNpc.forEach(npc => npc.setSprite(sprite));
  }

  render(ctx: CanvasRenderingContext2D) {
    this.arrNpc.forEach(npc => npc.render(ctx));
  }
}

export class Npc {
  id: number;
  sprite: Sprite | undefined;
  x: number;
  y: number;
  width: number;
  height: number;
  frameX: number;
  frameY: number;

  constructor(options: NpcConstructorOptions) {
    this.id = options.id;
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

  get position(): Position {
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
