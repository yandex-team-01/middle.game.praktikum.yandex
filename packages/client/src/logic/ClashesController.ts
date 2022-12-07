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

  spriteBlood: Sprite | undefined;
  spriteTeleport: Sprite | undefined;
  skinHorizontalFrame = 0;
  skinTotalNumberOfHorizontalFrames = 3;
  skinFirstHorizontalFrame = 0;
  skinVerticalFrame = 0;
  inaccuracyOfCharacterSprite = 10;
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
      if (
        posPlayer.x2 - this.inaccuracyOfCharacterSprite >=
          posNpc.x1 - this.inaccuracyOfCharacterSprite &&
        posPlayer.x1 - this.inaccuracyOfCharacterSprite <=
          posNpc.x2 - this.inaccuracyOfCharacterSprite
      )
        XColl = true;
      if (
        posPlayer.y2 - this.inaccuracyOfCharacterSprite >=
          posNpc.y1 - this.inaccuracyOfCharacterSprite &&
        posPlayer.y1 - this.inaccuracyOfCharacterSprite <=
          posNpc.y2 - this.inaccuracyOfCharacterSprite
      )
        YColl = true;
      if (XColl && YColl) {
        npc.collisionHandling(this.playerOne);
        if (npc.type === 'friend') {
          this.deleteAndRestoreNpc(npc);
          this.setColisionImgCoordinats(npc, false);
        } else {
          npc.isMoving = false;
          npc.hasCollision = true;
          npc.speed = npc.speed + 0.5;
          this.setColisionImgCoordinats(npc, true);
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
      npc.speed = npc.speed + 1;
      this.setColisionImgCoordinats(prevNpc, true);
      this.deleteAndRestoreNpc(prevNpc);
    }

    if (npc.type === 'friend' && prevNpc.type === 'friend') {
      this.setColisionImgCoordinats(prevNpc, false);
      this.deleteAndRestoreNpc(prevNpc);
    }
  }

  deleteAndRestoreNpc(npc: NpcEnemy | NpcFriend) {
    this.npcControll.deleteNpc(npc);
    this.npcControll.restoreNpc(npc);
  }
  setColisionImgCoordinats(
    npc: NpcEnemy | NpcFriend,
    isCollisionWithEnemy: boolean
  ) {
    this.x = npc.x;
    this.y = npc.y + npc.height;
    const collision = new Collision(this.ctx, this.x, this.y);
    collision.isCollisionWithEnemy = isCollisionWithEnemy;

    if (isCollisionWithEnemy) {
      collision.setSprite(this.spriteBlood as Sprite);
    } else {
      collision.x = npc.x + npc.width / 2;
      collision.y = npc.y - npc.height / 2;
      collision.setSprite(this.spriteTeleport as Sprite);
    }

    this.arrCollision.push(collision);
    if (this.npcScreamingAudio && isCollisionWithEnemy) {
      this.npcScreamingAudio.play();
    }
  }
  setSprite(spriteTeleport: Sprite, spriteBlood: Sprite) {
    this.spriteTeleport = spriteTeleport;
    this.spriteBlood = spriteBlood;
  }

  render() {
    this.arrCollision.forEach((collision, index) => {
      collision.render();
      if (
        !collision.isCollisionWithEnemy &&
        collision.skinHorizontalFrame ===
          collision.skinTotalNumberOfHorizontalFrames
      ) {
        this.arrCollision = this.arrCollision.filter((_, key) => key !== index);
      }
    });
  }
}
