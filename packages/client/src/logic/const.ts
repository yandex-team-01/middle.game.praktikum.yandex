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

export const GAME_SETTINGS = {
  GAME_TIME_LIMIT: 14.8 * 60 * 1000,
  GAME_WIDTH: 1240,
  GAME_HEIGHT: 600,
  ENEMY_WIDTH: 49,
  ENEMY_HEIGHT: 101,
  FRIEND_WIDTH: 45,
  FRIEND_HEIGHT: 90,
  PLAYER_WIDTH: 54,
  PLAYER_HEIGHT: 84,
  COLLISION_BLOOD_WIDTH: 49,
  COLLISION_BLOOD_HEIGHT: 33,
  COLLISION_TELEPORT_WIDTH: 70.75,
  COLLISION_TELEPORT_HEIGHT: 90,
  MONEY_WIDTH: 40,
  MONEY_HEIGHT: 40,
  HEARTH_WIDTH: 40,
  HEARTH_HEIGHT: 40,
  BACKGROUND_VERTICAL_LIMIT: 100,
  SKIN_HORIZONTAL_FRAME: 0,
  SKIN_TOTAL_NUMBER_OF_HORIZONTAL_FRAMES: 3,
  SKIN_FIRST_HORIZONTAL_FRAME: 0,
  SKIN_VERTICAL_FRAME: 0,
  INACCURACY_OF_CHARACTER_SPRITE: 10,
  PLAYER_ONE_X: 100,
  PLAYER_ONE_Y: 400,
  PLAYER_SPEED: 7,
  ENEMY_SPEED: 8,
  FRIEND_SPEED: 6,
  HIT_POINTS: 3,
  DEFINE_BONUS: 1,
  PLAYER_LEVEL_SPEED_BONUS: 2,
  NPC_ENEMY_LEVEL_SPEED_BONUS: 2,
  PLAYER_COLLISION_SPEED_BONUS: 0.05,
  NPC_ENEMY_COLLISION_SPEED_BONUS: 0.025,
  ENEMY_HUGGY_START_X: 500,
  ENEMY_KISSY_START_X: 700,
  ENEMY_START_Y: 200,
} as const;

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
  {
    id: SPRITE_ID.MAIN_BACK,
    src: background,
    width: GAME_SETTINGS.GAME_WIDTH,
    height: GAME_SETTINGS.GAME_HEIGHT,
  },
  {
    id: SPRITE_ID.GAME_OVER_BACK,
    src: gameOver,
    width: GAME_SETTINGS.GAME_WIDTH,
    height: GAME_SETTINGS.GAME_HEIGHT,
  },
  {
    id: SPRITE_ID.NPC_FRIEND,
    src: npcFriend,
    width: GAME_SETTINGS.FRIEND_WIDTH,
    height: GAME_SETTINGS.FRIEND_HEIGHT,
  },
  {
    id: SPRITE_ID.PLAYER,
    src: player,
    width: GAME_SETTINGS.PLAYER_WIDTH,
    height: GAME_SETTINGS.PLAYER_HEIGHT,
  },
  {
    id: SPRITE_ID.NPC_ENEMY_HUGGY,
    src: npcEnemyHuggy,
    width: GAME_SETTINGS.ENEMY_WIDTH,
    height: GAME_SETTINGS.ENEMY_HEIGHT,
  },
  {
    id: SPRITE_ID.NPC_ENEMY_KISSY,
    src: npcEnemyKissy,
    width: GAME_SETTINGS.ENEMY_WIDTH,
    height: GAME_SETTINGS.ENEMY_HEIGHT,
  },
  {
    id: SPRITE_ID.HEART,
    src: heart,
    width: GAME_SETTINGS.HEARTH_WIDTH,
    height: GAME_SETTINGS.HEARTH_HEIGHT,
  },
  {
    id: SPRITE_ID.MONEY,
    src: money,
    width: GAME_SETTINGS.MONEY_WIDTH,
    height: GAME_SETTINGS.MONEY_HEIGHT,
  },
  {
    id: SPRITE_ID.COLLISION_BLOOD,
    src: collisionBood,
    width: GAME_SETTINGS.COLLISION_BLOOD_WIDTH,
    height: GAME_SETTINGS.COLLISION_BLOOD_HEIGHT,
  },
  {
    id: SPRITE_ID.COLLISION_TELEPORT,
    src: collisionTeleport,
    width: GAME_SETTINGS.COLLISION_TELEPORT_WIDTH,
    height: GAME_SETTINGS.COLLISION_TELEPORT_HEIGHT,
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

export const scoreLevels = [
  {
    id: 1,
    name: 'level 1',
    score: 0,
  },
  {
    id: 2,
    name: 'level 2',
    score: 5,
  },
  {
    id: 3,
    name: 'level 3',
    score: 20,
  },
  {
    id: 4,
    name: 'level 4',
    score: 40,
  },
  {
    id: 5,
    name: 'level 5',
    score: 100,
  },
  {
    id: 6,
    name: 'level 6',
    score: 200,
  },
  {
    id: 7,
    name: 'level 7',
    score: 350,
  },
  {
    id: 8,
    name: 'level 8',
    score: 500,
  },
  {
    id: 9,
    name: 'level 9',
    score: 700,
  },
  {
    id: 10,
    name: 'level 10',
    score: 1000,
  },
];
