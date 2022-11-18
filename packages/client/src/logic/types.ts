import { PlayerOne } from './Player';
import { View } from './View';
import { Sprite } from './Sprite';
import { NpcControll } from './NpcControll';
import { Game } from './Game';
import { Timer } from './Timer';

export type SpriteOptions = {
  id: number | string;
  src: string;
  width: number;
  height: number;
};

export type AllSpritesType = Record<number | string, Sprite>;

export type NpcConstructorOptions = {
  id: number;
  defaultX: number;
  defaultY: number;
  type: string;
};

export type GameEntities = {
  player: PlayerOne;
  npcControll: NpcControll;
  view: View;
  sprites: Record<number | string, Sprite>;
  game: Game;
  timer: Timer
};

export type Position = {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
};
