import { Sprite } from './Sprite';
import { NpcConstructorOptions } from './types';

abstract class NpcAbstract {
  movePlayer!: () => void;
  id: number;
  sprite: Sprite | undefined;
  x: number;
  y: number;
  width: number;
  height: number;
  frameX: number;
  frameY: number;

  constructor(id: number) {
    (this.id = id), (this.width = 0);
    this.height = 0;
    this.x = 0;
    this.y = 0;
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

  get position() {
    return [this.x, this.x + this.width, this.y, this.y + this.height];
  }
}

export class Npc extends NpcAbstract {
  constructor(options: NpcConstructorOptions) {
    super(options.id);
    this.x = options.defaultX;
    this.y = options.defaultY;
    this.frameX = 0;
    this.frameY = 0;
  }
}
