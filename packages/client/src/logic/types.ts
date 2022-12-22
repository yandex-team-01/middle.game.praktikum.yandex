import { PlayerOne } from './Player';
import { View } from './View';
import { Sprite } from './Sprite';
import { NpcControll } from './NpcControll';
import { Game } from './Game';
import { Timer } from './Timer';
import { SpeedometerController } from './SpeedometerController';
import { Speedometer } from './Speedometer';
import { Levels } from './Levels';

export type SpriteOptions = {
  id: string;
  src: string;
  width: number;
  height: number;
};

export type AllSpritesType = Record<number | string, Sprite>;

export type NpcConstructorOptions = {
  id: number;
  type: string;
};

export type GameEntities = {
  player: PlayerOne;
  npcControll: NpcControll;
  view: View;
  sprites: Record<number | string, Sprite>;
  game: Game;
  timer: Timer;
  speedometerController: SpeedometerController;
  speedometer: Speedometer;
  levels: Levels;
};

export type Position = {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
};

export type SpeedometerControllerRenderProps = {
  spriteX: number;
  spriteY: number;
  speedometerValue: number;
  speedometerText: string;
  textX: number;
  textY: number;
}
