import { NpcEnemy, NpcFriend } from './Npc';
import { NpcControll } from './NpcControll';
import { PlayerOne } from './Player';

export class ClashesController {
  public playerOne: PlayerOne;
  public npcControll: NpcControll;

  constructor(player: PlayerOne, npcControll: NpcControll) {
    this.playerOne = player;
    this.npcControll = npcControll;
  }

  checkClashes() {
    const posPlayer = this.playerOne.getPosition();
    this.npcControll.arrNpc.forEach(npc => {
      const posNpc = npc.getPosition();
      let XColl = false;
      let YColl = false;
      if (posPlayer.x2 >= posNpc.x1 && posPlayer.x1 <= posNpc.x2) XColl = true;
      if (posPlayer.y2 >= posNpc.y1 && posPlayer.y1 <= posNpc.y2) YColl = true;
      if (XColl && YColl) {
        npc.collisionHandling(this.playerOne);
        if (npc.type === 'friend') {
          this.npcControll.deleteNpc(npc);
          this.npcControll.restoreNpc(npc);
        } else {
          npc.isMoving = false;
          npc.speed = npc.speed + 0.5;
        }
      }
    });
    //в цикле проверяем каждый npc с другими npc на столкновение
    this.npcControll.arrNpc.forEach(npc => {
      this.checkClashesBetweenNpc(npc);
    });
  }

  checkClashesBetweenNpc(prevNpc: NpcEnemy | NpcFriend) {
    this.npcControll.arrNpc.forEach(npc => {
      if (prevNpc !== npc) {
        const posNpc = npc.getPosition();
        const posPrevNpc = prevNpc.getPosition();
        let XColl = false;
        let YColl = false;
        if (posNpc.x2 >= posPrevNpc.x1 && posNpc.x1 <= posPrevNpc.x2)
          XColl = true;

        if (posNpc.y2 >= posPrevNpc.y1 && posNpc.y1 <= posPrevNpc.y2)
          YColl = true;

        if (XColl && YColl) {
          prevNpc.isMoving = false;
          npc.isMoving = false;
          if (
            npc.type === 'friend' &&
            ['enemy_huggy', 'enemy_kissy'].includes(prevNpc.type)
          ) {
            this.npcControll.deleteNpc(npc);
            this.npcControll.restoreNpc(npc);
            prevNpc.speed = prevNpc.speed + 0.1;
          }
        }
      }
    });
  }
}
