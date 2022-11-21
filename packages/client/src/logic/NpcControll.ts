import { NpcEnemy, NpcFriend } from './Npc';
import { AllSpritesType } from './types';
import { defaultOptionNpc } from './const';
import { SPRITE_ID } from './const';

type NpcType = NpcEnemy | NpcFriend;

export class NpcControll {
  arrNpc: NpcType[];
  sprites: AllSpritesType | undefined;
  canvasHeight: number;
  canvasWidth: number;

  constructor(canvasHeight: number, canvasWidth: number) {
    // временно вывожу массив npc
    this.arrNpc = defaultOptionNpc.map(option => {
      if (option.type === 'friend') {
        return new NpcFriend(option);
      } else {
        return new NpcEnemy(option);
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
      } else {
        npc.setSprite(sprites[SPRITE_ID.NPC_ENEMY]);
      }
    });
  }

  render(ctx: CanvasRenderingContext2D) {
    this.arrNpc.forEach(npc =>
      npc.render(ctx, this.canvasHeight, this.canvasWidth)
    );
  }

  deleteNpc(npc: NpcType) {
    this.arrNpc = this.arrNpc.filter(item => item.id !== npc.id);
  }
}
