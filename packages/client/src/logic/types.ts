import { PlayerOne } from './Player/Player';
import { View } from './View';
import { Sprite } from './Sprite';
import { Npc } from './Npc';

export type SpriteOptions = {
  id: number | string;
  src: string;
  width: number;
  height: number;
};

export type AllSprites = Record<number | string, Sprite>;

export type NpcConstructorOptions = {
  id: number;
  defaultX: number;
  defaultY: number;
};

export type GameEntities = {
  player: PlayerOne;
  arrNpc: Npc[];
  view: View;
  sprites: Record<number | string, Sprite>;
};
