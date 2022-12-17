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
    this.ctx.font = '30px PixelDigivolve';
    this.ctx.fillStyle = '#fff';
    this.ctx.fillText(
      `Player: ${this.playerOne.speed.toFixed(2)}`,
      this.canvasWidth / 4,
      40
    );
  }

  speedNpc() {
    this.ctx.font = '30px PixelDigivolve';
    this.ctx.fillStyle = '#fff';
    this.ctx.fillText(
      `NPC: ${this.npcControll.arrNpc[0].speed.toFixed(2)}`,
      this.canvasWidth / 1.5,
      40
    );
  }

  render() {
    this.speedPlayer();
    this.speedNpc();
  }
}
