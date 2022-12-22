import { Sprite } from './Sprite';
import { SpeedometerControllerRenderProps } from './types';

export class SpeedometerController {
  private ctx: CanvasRenderingContext2D;
  speedometer!: Sprite;

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
  }

  setSprite(speedometer: Sprite) {
    this.speedometer = speedometer;
  }

  render({
    spriteX,
    spriteY,
    speedometerValue,
    speedometerText,
    textX,
    textY,
  }: SpeedometerControllerRenderProps) {
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
