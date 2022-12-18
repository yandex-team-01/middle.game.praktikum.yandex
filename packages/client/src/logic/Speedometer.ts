import { SpeedometerController } from './SpeedometerController';
import { PlayerOne } from './Player';
import { NpcControll } from './NpcControll';
import { Sprite } from './Sprite';
import { GAME_SETTINGS } from './const';

interface SpeedometerControllerRenderProps {
  spriteX: number;
  spriteY: number;
  speedometerValue: number;
  speedometerText: string;
  textX: number;
  textY: number;
}

export class Speedometer {
  private ctx: CanvasRenderingContext2D;
  private canvasHeight: number;
  private canvasWidth: number;
  private playerOne: PlayerOne;
  private npcControll: NpcControll;
  private speedometerController: SpeedometerController;

  constructor(
    ctx: CanvasRenderingContext2D,
    canvasHeight: number,
    canvasWidth: number,
    playerOne: PlayerOne,
    npcControll: NpcControll,
    speedometerController: SpeedometerController
  ) {
    this.ctx = ctx;
    this.canvasHeight = canvasHeight;
    this.canvasWidth = canvasWidth;
    this.playerOne = playerOne;
    this.npcControll = npcControll;
    this.speedometerController = speedometerController;
  }

  playerSpeedometer() {
    const spriteX = GAME_SETTINGS.SPEEDOMETER_PLAYER_X;
    const spriteY = GAME_SETTINGS.SPEEDOMETER_PLAYER_Y;
    const speedometerValue = this.playerOne.speed;
    const speedometerText = `Player`;
    const textX = 8;
    const textY = 60;
    this.speedometerController.render({
      spriteX,
      spriteY,
      speedometerValue,
      speedometerText,
      textX,
      textY,
    });
  }

  huggySpeedometer() {
    const spriteX = GAME_SETTINGS.SPEEDOMETER_HUGGY_X;
    const spriteY = GAME_SETTINGS.SPEEDOMETER_HUGGY_Y;
    const speedometerValue = this.npcControll.arrNpc[1].speed;
    const speedometerText = `Huggy`;
    const textX = 8;
    const textY = 80;
    this.speedometerController.render({
      spriteX,
      spriteY,
      speedometerValue,
      speedometerText,
      textX,
      textY,
    });
  }

  kissySpeedometer() {
    const spriteX = GAME_SETTINGS.SPEEDOMETER_KISSY_X;
    const spriteY = GAME_SETTINGS.SPEEDOMETER_KISSY_Y;
    const speedometerValue = this.npcControll.arrNpc[0].speed;
    const speedometerText = `Kissy`;
    const textX = 8;
    const textY = 100;
    this.speedometerController.render({
      spriteX,
      spriteY,
      speedometerValue,
      speedometerText,
      textX,
      textY,
    });
  }

  render() {
    this.playerSpeedometer();
    this.huggySpeedometer();
    this.kissySpeedometer();
  }
}
