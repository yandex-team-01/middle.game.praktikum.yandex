import { PlayerOne } from './Player/Player';
import { View } from './View';
import { Sprite } from './Sprite';
import { NpcControll } from './Npc';

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
};

export type GameEntities = {
  player: PlayerOne;
  npcControll: NpcControll;
  view: View;
  sprites: Record<number | string, Sprite>;
};

export type Position = {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
};
