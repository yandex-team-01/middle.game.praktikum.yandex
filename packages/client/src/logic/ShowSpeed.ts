import { PlayerOne } from './Player';
import { NpcControll } from './NpcControll';

export class ShowSpeed {
  private ctx: CanvasRenderingContext2D;
  private canvasHeight: number;
  private canvasWidth: number;
  private playerOne: PlayerOne;
  private npcControll: NpcControll;

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

  speedPlayer() {
    const player = this.playerOne.speed.toFixed(2);
    this.ctx.font = '14px PixelDigivolve';
    this.ctx.fillStyle = '#fff';
    this.ctx.fillText(`Player: 🏃 ${player}`, 0, 60);
  }

  speedHuggy() {
    const huggy = this.npcControll.arrNpc[1].speed.toFixed(2);
    this.ctx.font = '14px PixelDigivolve';
    this.ctx.fillStyle = '#fff';
    this.ctx.fillText(`Huggy: 🏃 ${huggy}`, 0, 75);
  }

  speedKissy() {
    const kissy = this.npcControll.arrNpc[0].speed.toFixed(2);
    this.ctx.font = '14px PixelDigivolve';
    this.ctx.fillStyle = '#fff';
    this.ctx.fillText(`Kissy: 🏃 ${kissy}`, 0, 90);
  }

  render() {
    this.speedPlayer();
    this.speedHuggy();
    this.speedKissy();
  }
}
