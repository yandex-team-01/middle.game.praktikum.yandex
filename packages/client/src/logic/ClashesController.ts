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

  checkForCollisionsBetweenUserAndNpc() {
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
          npc.npcCurrentDirections = [];
          npc.speed = npc.speed + 0.5;
        }
      }
    });
    //в цикле проверяем каждый npc с другими npc на столкновение
    this.npcControll.arrNpc.forEach(npc => {
      this.checkForCollisionsBetweenNpc(npc);
    });
  }

  checkForCollisionsBetweenNpc(prevNpc: NpcEnemy | NpcFriend) {
    this.npcControll.arrNpc.forEach(npc => {
      if (prevNpc !== npc) {
        let isCollision = false;

        if (
          npc.x <= prevNpc.x + prevNpc.width &&
          prevNpc.x <= npc.x + npc.width &&
          npc.y <= prevNpc.y + prevNpc.height &&
          prevNpc.y <= npc.y + npc.height
        ) {
          isCollision = true;
        }

        if (isCollision) {
          //обездвиживаем npc, затем в классе npc в animate проверяем, если npc обездвижено,
          // то задаем новое случайное направление движения
          prevNpc.isMoving = false;
          npc.isMoving = false;
          //логика столкновения вражеского с дружеским
          this.checkCollisionsBetweenFriendAndEnemyNpc(npc, prevNpc);
        }
      }
    });
  }

  checkCollisionsBetweenFriendAndEnemyNpc(
    npc: NpcEnemy | NpcFriend,
    prevNpc: NpcEnemy | NpcFriend
  ) {
    if (['enemy_huggy', 'enemy_kissy'].includes(npc.type)) {
      npc.speed = prevNpc.speed + 0.1;
    }

    if (['enemy_huggy', 'enemy_kissy'].includes(prevNpc.type)) {
      prevNpc.speed = prevNpc.speed + 0.1;
    }

    if (prevNpc.type === 'friend') {
      this.deleteAndRestoreNpc(prevNpc);
    }
  }

  deleteAndRestoreNpc(npc: NpcEnemy | NpcFriend) {
    this.npcControll.deleteNpc(npc);
    this.npcControll.restoreNpc(npc);
  }
}
