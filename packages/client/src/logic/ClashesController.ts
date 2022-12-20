import { NpcEnemy, NpcFriend, NpcTypes } from './Npc';
import { NpcControll } from './NpcControll';
import { PlayerOne } from './Player';
import { Sprite } from './Sprite';
import { Collision } from './Collision';
import { GAME_SETTINGS } from './const';
import { Levels } from './Levels';

export class ClashesController {
  playerOne: PlayerOne;
  npcControll: NpcControll;
  ctx: CanvasRenderingContext2D;
  spriteBlood: Sprite | undefined;
  spriteTeleport: Sprite | undefined;
  arrCollision: Collision[] = [];
  npcScreamingAudio: HTMLAudioElement;
  levels: Levels;
  x = 0;
  y = 0;
  skinHorizontalFrame = GAME_SETTINGS.SKIN_HORIZONTAL_FRAME;
  skinTotalNumberOfHorizontalFrames =
    GAME_SETTINGS.SKIN_TOTAL_NUMBER_OF_HORIZONTAL_FRAMES;
  skinFirstHorizontalFrame = GAME_SETTINGS.SKIN_FIRST_HORIZONTAL_FRAME;
  skinVerticalFrame = GAME_SETTINGS.SKIN_VERTICAL_FRAME;
  inaccuracyOfCharacterSprite = GAME_SETTINGS.INACCURACY_OF_CHARACTER_SPRITE;

  constructor(
    ctx: CanvasRenderingContext2D,
    player: PlayerOne,
    npcControll: NpcControll,
    levels: Levels
  ) {
    this.ctx = ctx;
    this.playerOne = player;
    this.npcControll = npcControll;
    this.levels = levels;
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
        if (npc.type === NpcTypes.Friend) {
          this.levels.updateLevel();
          this.playerOne.speed =
          this.playerOne.speed + GAME_SETTINGS.PLAYER_COLLISION_SPEED_BONUS;
          this.deleteAndRestoreNpc(npc);
          this.setColisionImgCoordinats(npc, false);
        } else {
          npc.isMoving = false;
          npc.hasCollision = true;
          npc.speed = npc.speed + GAME_SETTINGS.NPC_ENEMY_COLLISION_SPEED_BONUS;
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
      (npc.type === NpcTypes.Enemy_huggy ||
        npc.type === NpcTypes.Enemy_kissy) &&
      prevNpc.type === NpcTypes.Friend
    ) {
      npc.speed = npc.speed + GAME_SETTINGS.NPC_ENEMY_COLLISION_SPEED_BONUS;
      this.playerOne.speed =
          this.playerOne.speed - GAME_SETTINGS.NPC_ENEMY_COLLISION_SPEED_DAMAGE;
      this.setColisionImgCoordinats(prevNpc, true);
      this.deleteAndRestoreNpc(prevNpc);
    }

    if (npc.type === NpcTypes.Friend && prevNpc.type === NpcTypes.Friend) {
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
