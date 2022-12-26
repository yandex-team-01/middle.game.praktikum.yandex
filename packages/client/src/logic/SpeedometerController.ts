import { Sprite } from './Sprite';
import { speedometerOptions } from './const';
import { PlayerOne } from './Player';
import { NpcControll } from './NpcControll';
import { SpeedometerOptions } from './types';

export class SpeedometerController {
  private ctx: CanvasRenderingContext2D;
  private playerOne: PlayerOne;
  private npcControll: NpcControll;
  speedometer!: Sprite;

  constructor(
    ctx: CanvasRenderingContext2D,
    playerOne: PlayerOne,
    npcControll: NpcControll
  ) {
    this.ctx = ctx;
    this.playerOne = playerOne;
    this.npcControll = npcControll;
  }

  speedometerTypeFilter(type: string) {
    speedometerOptions.forEach(object => {
      if (object.type === type) {
        if (object.type === 'player') {
          return this.render(object, this.playerOne.speed);
        }
        this.render(object, this.npcControll.arrNpcTypeFilter(type).speed);
      }
    });
  }

  setSprite(speedometer: Sprite) {
    this.speedometer = speedometer;
  }

  render(
    { spriteX, spriteY, speedometerText, textX, textY }: SpeedometerOptions,
    speedometerValue: number
  ) {
    this.ctx.font = '14px PixelDigivolve';
    this.ctx.fillStyle = '#fff';
    this.ctx.drawImage(
      this.speedometer.image,
      spriteX,
      spriteY,
      this.speedometer.width,
      this.speedometer.height
    );
    this.ctx.fillText(`${speedometerText}`, textX, textY);
    this.ctx.fillText(`${speedometerValue.toFixed(2)}`, textX + 85, textY);
  }
}
