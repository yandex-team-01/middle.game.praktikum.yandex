import { NpcEnemy, NpcFriend, NpcModel, NpcTypes } from './Npc';
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
      if (option.type === NpcTypes.Friend) {
        return new NpcFriend(ctx, option, canvasHeight, canvasWidth);
      } else {
        return new NpcEnemy(ctx, option, canvasHeight, canvasWidth);
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
      if (npc.type === NpcTypes.Friend) {
        npc.setSprite(sprites[SPRITE_ID.NPC_FRIEND]);
      } else if (npc.type === NpcTypes.Enemy_huggy) {
        npc.setSprite(sprites[SPRITE_ID.NPC_ENEMY_HUGGY]);
      } else if (npc.type === NpcTypes.Enemy_kissy) {
        npc.setSprite(sprites[SPRITE_ID.NPC_ENEMY_KISSY]);
      }
    });
  }

  arrNpcTypeFilter(npcType: string) {
    let npcObject: NpcModel;
    this.arrNpc.forEach(object => {
      if (object.type === npcType) {
        npcObject = object;
      }
    });
    return npcObject!;
  }

  render() {
    this.arrNpc.forEach(npc => npc.render());
  }

  deleteNpc(npc: NpcType) {
    this.arrNpc = this.arrNpc.filter(item => item.id !== npc.id);
  }

  restoreNpc(npc: NpcType) {
    if (!this.sprites) {
      return;
    }
    const newNpcOptions = defaultOptionNpc.filter(item => item.id === npc.id);
    const newNpcFriendOptions = newNpcOptions.shift();
    if (newNpcFriendOptions) {
      const newNpc = new NpcFriend(
        this.ctx,
        newNpcFriendOptions,
        this.canvasHeight,
        this.canvasWidth
      );
      newNpc.setSprite(this.sprites[SPRITE_ID.NPC_FRIEND]);
      this.arrNpc.push(newNpc);
    }
  }
}
