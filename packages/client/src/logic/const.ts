import { SpriteOptions } from './types';
import back from '/src/assets/images/game-background.png';
import gameOver from '/src/assets/images/game-over-background.png';
import player from '/src/assets/images/game-player.png';
import npc from '/src/assets/images/game-player-second.png';

export const SPRITE_ID = {
  MAIN_BACK: 'back',
  GAME_OVER_BACK: 'gameOver',
  PLAYER: 'player',
  NPC: 'npc',
} as const;

export const spritesOptions: SpriteOptions[] = [
  { id: SPRITE_ID.MAIN_BACK, src: back, width: 100, height: 100 },
  { id: SPRITE_ID.GAME_OVER_BACK, src: gameOver, width: 100, height: 100 },
  { id: SPRITE_ID.PLAYER, src: player, width: 40, height: 72 },
  { id: SPRITE_ID.NPC, src: npc, width: 40, height: 72 },
];

// временная константа для вывода 3 npc
export const defaultOptionNpc = [
  {
    id: 1,
    defaultX: 300,
    defaultY: 200,
  },
  {
    id: 2,
    defaultX: 450,
    defaultY: 300,
  },
  {
    id: 3,
    defaultX: 650,
    defaultY: 300,
  },
];
