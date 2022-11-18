import { SpriteOptions } from './types';
import back from '/src/assets/images/game-background.png';
import gameOver from '/src/assets/images/game-over-background.png';
import player from '/src/assets/images/game-player-1.png';
import npcFriend from '/src/assets/images/game-npc-friend.png';
import heart from '/src/assets/images/heart.png';
import money from '/src/assets/images/money.png';
import npcEnemy from '/src/assets/images/game-npc-huggy.png';

export const SPRITE_ID = {
  MAIN_BACK: 'back',
  GAME_OVER_BACK: 'gameOver',
  PLAYER: 'player',
  NPC_FRIEND: 'npc_friend',
  NPC_ENEMY: 'npc_enemy',
  HEART: 'heart',
  MONEY: 'money',
} as const;

export const spritesOptions: SpriteOptions[] = [
  { id: SPRITE_ID.MAIN_BACK, src: back, width: 100, height: 100 },
  { id: SPRITE_ID.GAME_OVER_BACK, src: gameOver, width: 100, height: 100 },
  { id: SPRITE_ID.NPC_FRIEND, src: npcFriend, width: 40, height: 60 },
  { id: SPRITE_ID.PLAYER, src: player, width: 38.6, height: 65.75 },
  { id: SPRITE_ID.NPC_ENEMY, src: npcEnemy, width: 40, height: 72 },
  { id: SPRITE_ID.HEART, src: heart, width: 40, height: 40 },
  { id: SPRITE_ID.MONEY, src: money, width: 40, height: 40 },
];

// временная константа для вывода 3 npc
export const defaultOptionNpc = [
  {
    id: 1,
    defaultX: 150,
    defaultY: 150,
    type: 'enemy',
  },
  {
    id: 2,
    defaultX: 200,
    defaultY: 200,
    type: 'enemy',
  },
  {
    id: 3,
    defaultX: 150,
    defaultY: 200,
    type: 'friend',
  },
  {
    id: 4,
    defaultX: 200,
    defaultY: 250,
    type: 'friend',
  },
  {
    id: 5,
    defaultX: 250,
    defaultY: 250,
    type: 'enemy',
  },
  {
    id: 6,
    defaultX: 250,
    defaultY: 300,
    type: 'friend',
  },
  {
    id: 7,
    defaultX: 300,
    defaultY: 350,
    type: 'friend',
  },
  {
    id: 8,
    defaultX: 300,
    defaultY: 300,
    type: 'enemy',
  },
];
