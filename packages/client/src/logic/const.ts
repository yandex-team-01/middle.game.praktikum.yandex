import { SpriteOptions } from './types';
import background from '/src/assets/images/game-background.png';
import gameOver from '/src/assets/images/game-over-background.png';
import player from '/src/assets/images/game-player-1.png';
import npcFriend from '/src/assets/images/game-npc-friend.png';
import heart from '/src/assets/images/heart.png';
import money from '/src/assets/images/money.png';
import npcEnemyHuggy from '/src/assets/images/game-npc-huggy.png';
import npcEnemyKissy from '/src/assets/images/game-npc-kissy.png';
import collisionBood from '/src/assets/images/game-collision-blood.png';
import collisionTeleport from '/src/assets/images/game-collision-teleport.png';

export enum SPRITE_ID {
  MAIN_BACK = 'back',
  GAME_OVER_BACK = 'gameOver',
  PLAYER = 'player',
  NPC_FRIEND = 'npc_friend',
  NPC_ENEMY_HUGGY = 'npc_enemy_huggy',
  NPC_ENEMY_KISSY = 'npc_enemy_kissy',
  HEART = 'heart',
  MONEY = 'money',
  COLLISION_BLOOD = 'collision_bood',
  COLLISION_TELEPORT = 'collision_teleport',
}

export const spritesOptions: SpriteOptions[] = [
  { id: SPRITE_ID.MAIN_BACK, src: background, width: 100, height: 100 },
  { id: SPRITE_ID.GAME_OVER_BACK, src: gameOver, width: 100, height: 100 },
  { id: SPRITE_ID.NPC_FRIEND, src: npcFriend, width: 45, height: 90 },
  { id: SPRITE_ID.PLAYER, src: player, width: 54, height: 84 },
  { id: SPRITE_ID.NPC_ENEMY_HUGGY, src: npcEnemyHuggy, width: 49, height: 101 },
  { id: SPRITE_ID.NPC_ENEMY_KISSY, src: npcEnemyKissy, width: 49, height: 101 },
  { id: SPRITE_ID.HEART, src: heart, width: 40, height: 40 },
  { id: SPRITE_ID.MONEY, src: money, width: 40, height: 40 },
  { id: SPRITE_ID.COLLISION_BLOOD, src: collisionBood, width: 49, height: 33 },
  {
    id: SPRITE_ID.COLLISION_TELEPORT,
    src: collisionTeleport,
    width: 70.75,
    height: 90,
  },
];

// временная константа для вывода npc
export const defaultOptionNpc = [
  {
    id: 1,
    type: 'enemy_kissy',
  },
  {
    id: 2,
    type: 'enemy_huggy',
  },
  {
    id: 3,
    type: 'friend',
  },
  {
    id: 4,
    type: 'friend',
  },
  {
    id: 5,
    type: 'friend',
  },
  {
    id: 6,
    type: 'friend',
  },
  {
    id: 7,
    type: 'friend',
  },
  {
    id: 8,
    type: 'friend',
  },
];
