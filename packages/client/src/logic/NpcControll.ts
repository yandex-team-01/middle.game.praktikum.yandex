import { Npc } from './Npc';
import { Sprite } from './Sprite';
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
