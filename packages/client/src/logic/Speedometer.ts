import { SpeedometerController } from './SpeedometerController';
import { PlayerOne } from './Player';
import { NpcControll } from './NpcControll';
import { GAME_SETTINGS } from './const';
import { NpcModel } from './Npc';

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

  arrNpcTypeFilter(npcType: string) {
    let npcObject: NpcModel;
    this.npcControll.arrNpc.forEach(object => {
      if (object.type === npcType) {
        npcObject = object;
      }
    });
    return npcObject!;
  }

  playerSpeedometer() {
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
  }

  huggySpeedometer() {
    const spriteX = GAME_SETTINGS.SPEEDOMETER_SPRITE_HUGGY_X;
    const spriteY = GAME_SETTINGS.SPEEDOMETER_SPRITE_HUGGY_Y;
    const speedometerValue = this.arrNpcTypeFilter('enemy_huggy').speed;
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
  }

  kissySpeedometer() {
    const spriteX = GAME_SETTINGS.SPEEDOMETER_SPRITE_KISSY_X;
    const spriteY = GAME_SETTINGS.SPEEDOMETER_SPRITE_KISSY_Y;
    const speedometerValue = this.arrNpcTypeFilter('enemy_kissy').speed;
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
  }

  speedometerPush() {
    this.playerSpeedometer();
    this.huggySpeedometer();
    this.kissySpeedometer();
  }

  render() {
    this.speedometerPush();
  }
}
