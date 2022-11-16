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
    const posPlayer = this.playerOne.position;

    this.npcControll.arrNpc.forEach(npc => {
      const posNpc = npc.position;
      let XColl = false;
      let YColl = false;
      if (posPlayer.x2 >= posNpc.x1 && posPlayer.x1 <= posNpc.x2) XColl = true;
      if (posPlayer.y2 >= posNpc.y1 && posPlayer.y1 <= posNpc.y2) YColl = true;
      if (XColl && YColl) {
        npc.collisionHandling(this.playerOne);

        this.npcControll.deleteNpc(npc);
      }
    });
  }
}
