import { SpeedometerController } from './SpeedometerController';
import { PlayerOne } from './Player';
import { NpcControll } from './NpcControll';
import { GAME_SETTINGS } from './const';

export class Speedometer {
  private playerOne: PlayerOne;
  private npcControll: NpcControll;
  private speedometerController: SpeedometerController;

  constructor(
    playerOne: PlayerOne,
    npcControll: NpcControll,
    speedometerController: SpeedometerController
  ) {
    this.playerOne = playerOne;
    this.npcControll = npcControll;
    this.speedometerController = speedometerController;
  }

  private prepareSpeedometer() {
    const playerSpeedometer = () => {
      const spriteX = GAME_SETTINGS.SPEEDOMETER_SPRITE_PLAYER_X;
      const spriteY = GAME_SETTINGS.SPEEDOMETER_SPRITE_PLAYER_Y;
      const speedometerValue = this.playerOne.speed;
      const speedometerText = `Player`;
      const textX = GAME_SETTINGS.SPEEDOMETER_TEXT_PLAYER_X;
      const textY = GAME_SETTINGS.SPEEDOMETER_TEXT_PLAYER_Y;
      this.speedometerController.render({
        spriteX,
        spriteY,
        speedometerValue,
        speedometerText,
        textX,
        textY,
      });
    };

    const huggySpeedometer = () => {
      const spriteX = GAME_SETTINGS.SPEEDOMETER_SPRITE_HUGGY_X;
      const spriteY = GAME_SETTINGS.SPEEDOMETER_SPRITE_HUGGY_Y;
      const speedometerValue =
        this.npcControll.arrNpcTypeFilter('enemy_huggy').speed;
      const speedometerText = `Huggy`;
      const textX = GAME_SETTINGS.SPEEDOMETER_TEXT_HUGGY_X;
      const textY = GAME_SETTINGS.SPEEDOMETER_TEXT_HUGGY_Y;
      this.speedometerController.render({
        spriteX,
        spriteY,
        speedometerValue,
        speedometerText,
        textX,
        textY,
      });
    };

    const kissySpeedometer = () => {
      const spriteX = GAME_SETTINGS.SPEEDOMETER_SPRITE_KISSY_X;
      const spriteY = GAME_SETTINGS.SPEEDOMETER_SPRITE_KISSY_Y;
      const speedometerValue =
        this.npcControll.arrNpcTypeFilter('enemy_kissy').speed;
      const speedometerText = `Kissy`;
      const textX = GAME_SETTINGS.SPEEDOMETER_TEXT_KISSY_X;
      const textY = GAME_SETTINGS.SPEEDOMETER_TEXT_KISSY_Y;
      this.speedometerController.render({
        spriteX,
        spriteY,
        speedometerValue,
        speedometerText,
        textX,
        textY,
      });
    };

    playerSpeedometer();
    huggySpeedometer();
    kissySpeedometer();
  }

  render() {
    this.prepareSpeedometer();
  }
}
