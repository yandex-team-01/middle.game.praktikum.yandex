import { NpcEnemy, NpcFriend } from './Npc';
import { NpcControll } from './NpcControll';
import { PlayerOne } from './Player';
import { Sprite } from './Sprite';
import { Collision } from './Collision';
export class ClashesController {
  public playerOne: PlayerOne;
  public npcControll: NpcControll;
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;

  sprite: Sprite | undefined;
  skinHorizontalFrame = 0;
  skinTotalNumberOfHorizontalFrames = 3;
  skinFirstHorizontalFrame = 0;
  skinVerticalFrame = 0;
  arrCollision: Collision[] = [];
  npcScreamingAudio: HTMLAudioElement;

  constructor(
    ctx: CanvasRenderingContext2D,
    player: PlayerOne,
    npcControll: NpcControll
  ) {
    this.ctx = ctx;
    this.x = 0;
    this.y = 0;

    this.playerOne = player;
    this.npcControll = npcControll;
    this.npcScreamingAudio = new Audio(
      '/src/assets/audio/game-npc-friend-screaming.mp3'
    );
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
          npc.hasCollision = true;
          npc.speed = npc.speed + 0.5;
          this.setColisionImgCoordinats(npc);
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
    if (
      ['enemy_huggy', 'enemy_kissy'].includes(npc.type) &&
      prevNpc.type === 'friend'
    ) {
      prevNpc.speed = prevNpc.speed + 0.1;
      this.setColisionImgCoordinats(prevNpc);
      this.deleteAndRestoreNpc(prevNpc);
    }

    if (npc.type === 'friend' && prevNpc.type === 'friend') {
      this.deleteAndRestoreNpc(prevNpc);
    }
  }

  deleteAndRestoreNpc(npc: NpcEnemy | NpcFriend) {
    this.npcControll.deleteNpc(npc);
    this.npcControll.restoreNpc(npc);
  }
  setColisionImgCoordinats(npc: NpcEnemy | NpcFriend) {
    this.x = npc.x;
    this.y = npc.y + npc.height;
    const collision = new Collision(this.ctx, this.x, this.y);
    collision.setSprite(this.sprite as Sprite);
    this.arrCollision.push(collision);
  }
  setSprite(sprite: Sprite) {
    this.sprite = sprite;
  }

  render() {
    this.arrCollision.forEach(collision => {
      collision.render();
      if (this.npcScreamingAudio) {
        this.npcScreamingAudio.currentTime = 0;
        this.npcScreamingAudio.play();
      }
      if (
        collision.skinHorizontalFrame ===
        collision.skinTotalNumberOfHorizontalFrames
      ) {
        this.arrCollision = this.arrCollision.filter(key => key !== key);
      }
    });
  }
}
