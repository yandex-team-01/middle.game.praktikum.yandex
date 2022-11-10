import { Npc } from './Npc';
import { PlayerOne } from './Player/Player';
import { GameEntities } from './types';
import { AllSprites } from './types';

export class View {
  public canvas?: HTMLCanvasElement;
  public ctx?: CanvasRenderingContext2D | null;
  public sprites: AllSprites;

  constructor(canvas: HTMLCanvasElement) {
    this.sprites = {};
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = 800;
    this.canvas.height = 500;
  }

  setSprite(sprites: AllSprites) {
    this.sprites = sprites;
  }

  prepareCanvas(): void {
    if (this.canvas && this.ctx) {
      const back = this.sprites.back;

      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.drawImage(
        back.image,
        0,
        0,
        this.canvas.width,
        this.canvas.height
      );
    }
  }

  renderPlayer(player: PlayerOne): void {
    if (!player.sprite) {
      return;
    }

    this.ctx?.drawImage(
      player.sprite.image,
      player.width * player.frameX,
      player.height * player.frameY,
      player.width,
      player.height,
      player.x,
      player.y,
      player.width,
      player.height
    );
    this.ctx?.strokeRect(player.x, player.y, player.width, player.height);
    player.animate();
  }

  renderNpc(npcArr: Npc[]): void {
    npcArr.forEach(npc => {
      if (!npc.sprite) {
        return;
      }

      this.ctx?.drawImage(
        npc.sprite.image,
        npc.width * npc.frameX,
        npc.height * npc.frameY,
        npc.width,
        npc.height,
        npc.x,
        npc.y,
        npc.width,
        npc.height
      );
      this.ctx?.strokeRect(npc.x, npc.y, npc.width, npc.height);
    });
  }

  renderGameOver() {
    if (this.canvas && this.ctx) {
      const back = this.sprites.gameOver;

      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      if (back) {
        this.ctx.drawImage(
          back.image,
          0,
          0,
          this.canvas.width,
          this.canvas.height
        );
      }
    }
  }

  update({ player, arrNpc }: GameEntities): void {
    this.prepareCanvas();
    this.renderPlayer(player);
    this.renderNpc(arrNpc);
  }
}
