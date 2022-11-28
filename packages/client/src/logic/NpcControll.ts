import { NpcEnemy, NpcFriend } from './Npc';
import { AllSpritesType } from './types';
import { defaultOptionNpc } from './const';
import { SPRITE_ID } from './const';

type NpcType = NpcEnemy | NpcFriend;

export class NpcControll {
  arrNpc: NpcType[];
  sprites: AllSpritesType | undefined;
  ctx: CanvasRenderingContext2D;
  canvasHeight: number;
  canvasWidth: number;

  constructor(
    ctx: CanvasRenderingContext2D,
    canvasHeight: number,
    canvasWidth: number
  ) {
    this.ctx = ctx;
    // временно вывожу массив npc
    this.arrNpc = defaultOptionNpc.map(option => {
      if (option.type === 'friend') {
        return new NpcFriend(ctx, option);
      } else {
        return new NpcEnemy(ctx, option);
      }
    });

    this.canvasHeight = canvasHeight;
    this.canvasWidth = canvasWidth;
  }

  setSprite(sprites: AllSpritesType) {
    if (!sprites) {
      return;
    }

    this.sprites = sprites;
    this.arrNpc.forEach(npc => {
      if (npc.type === 'friend') {
        npc.setSprite(sprites[SPRITE_ID.NPC_FRIEND]);
      } else if (npc.type === 'enemy_huggy') {
        npc.setSprite(sprites[SPRITE_ID.NPC_ENEMY_HUGGY]);
      } else if (npc.type === 'enemy_kissy') {
        npc.setSprite(sprites[SPRITE_ID.NPC_ENEMY_KISSY]);
      }
    });
  }

  render() {
    this.arrNpc.forEach(npc => npc.render(this.canvasHeight, this.canvasWidth));
  }

  deleteNpc(npc: NpcType) {
    this.arrNpc = this.arrNpc.filter(item => item.id !== npc.id);
  }
}
