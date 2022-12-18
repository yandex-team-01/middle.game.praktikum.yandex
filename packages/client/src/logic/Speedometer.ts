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
    const speedometerValue = this.arrNpcTypeFilter('enemy_huggy').speed;
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
    const speedometerValue = this.arrNpcTypeFilter('enemy_kissy').speed;
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
