import { SpriteOptions } from './types';
import back from '/src/assets/images/game-background.png';
import gameOver from '/src/assets/images/game-over-background.png';
import player from '/src/assets/images/game-player.png';
import npcFriend from '/src/assets/images/game-npc-1.png';
import npcEnemy from '/src/assets/images/game-npc-2.png';
import heart from '/src/assets/images/heart.png';
import money from '/src/assets/images/money.png';
import npc from '/src/assets/images/game-npc-huggy.png';

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
  { id: SPRITE_ID.PLAYER, src: player, width: 40, height: 60 },
  { id: SPRITE_ID.NPC_FRIEND, src: npcFriend, width: 40, height: 72 },
  { id: SPRITE_ID.NPC_ENEMY, src: npcEnemy, width: 40, height: 72 },
  { id: SPRITE_ID.HEART, src: heart, width: 40, height: 40 },
  { id: SPRITE_ID.MONEY, src: money, width: 40, height: 40 },
];

// временная константа для вывода 3 npc
export const defaultOptionNpc = [
  {
    id: 1,
    defaultX: 150,
    defaultY: 200,
    type: 'enemy',
  },
  {
    id: 2,
    defaultX: 200,
    defaultY: 250,
    type: 'enemy',
  },
  {
    id: 3,
    defaultX: 150,
    defaultY: 400,
    type: 'friend',
  },
  {
    id: 4,
    defaultX: 450,
    defaultY: 340,
    type: 'friend',
  },
  {
    id: 5,
    defaultX: 650,
    defaultY: 300,
    type: 'enemy',
  },
  {
    id: 6,
    defaultX: 300,
    defaultY: 300,
    type: 'friend',
  },
  {
    id: 7,
    defaultX: 650,
    defaultY: 200,
    type: 'friend',
  },
  {
    id: 8,
    defaultX: 250,
    defaultY: 150,
    type: 'enemy',
  },
];
