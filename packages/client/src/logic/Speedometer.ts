import { PlayerOne } from './Player';
import { NpcControll } from './NpcControll';
import { Sprite } from './Sprite';

export class Speedometer {
  private ctx: CanvasRenderingContext2D;
  private canvasHeight: number;
  private canvasWidth: number;
  private playerOne: PlayerOne;
  private npcControll: NpcControll;
  speed!: Sprite;

  constructor(
    ctx: CanvasRenderingContext2D,
    canvasHeight: number,
    canvasWidth: number,
    playerOne: PlayerOne,
    npcControll: NpcControll
  ) {
    this.ctx = ctx;
    this.canvasHeight = canvasHeight;
    this.canvasWidth = canvasWidth;
    this.playerOne = playerOne;
    this.npcControll = npcControll;
  }

  setSprite(speed: Sprite) {
    this.speed = speed;
  }

  speedPlayer() {
    const defineX = 72;
    const defineY = 48;
    const player = this.playerOne.speed.toFixed(2);
    this.ctx.font = '14px PixelDigivolve';
    this.ctx.fillStyle = '#fff';
    this.ctx.drawImage(
      this.speed.image,
      defineX,
      defineY,
      this.speed.width,
      this.speed.height
    );
    this.ctx.fillText(`Player      ${player}`, 8, 60);
  }

  speedHuggy() {
    const defineX = 72;
    const defineY = 68;
    const huggy = this.npcControll.arrNpc[1].speed.toFixed(2);
    this.ctx.font = '14px PixelDigivolve';
    this.ctx.fillStyle = '#fff';
    this.ctx.drawImage(
      this.speed.image,
      defineX,
      defineY,
      this.speed.width,
      this.speed.height
    );
    this.ctx.fillText(`Huggy       ${huggy}`, 8, 80);
  }

  speedKissy() {
    const defineX = 72;
    const defineY = 88;
    const kissy = this.npcControll.arrNpc[0].speed.toFixed(2);
    this.ctx.font = '14px PixelDigivolve';
    this.ctx.fillStyle = '#fff';
    this.ctx.drawImage(
      this.speed.image,
      defineX,
      defineY,
      this.speed.width,
      this.speed.height
    );
    this.ctx.fillText(`Kissy        ${kissy}`, 8, 100);
  }

  render() {
    this.speedPlayer();
    this.speedHuggy();
    this.speedKissy();
  }
}
