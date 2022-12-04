import { ClashesController } from './ClashesController';
import { NpcControll } from './NpcControll';
import { PlayerOne } from './Player';
import { Timer } from './Timer';
import { AllSpritesType } from './types';
import { GameEntities } from './types';

export class View {
  public canvas: HTMLCanvasElement;
  public ctx: CanvasRenderingContext2D;
  public sprites: AllSpritesType;
  public fpsInterval: number | undefined;
  public now: number | undefined;
  public then: number | undefined;
  public elapsed: number | undefined;
  public animationRequestId: number | undefined;
  public playerOne: PlayerOne;
  public npcControll: NpcControll;
  public clashesController: ClashesController;
  public gameOver: boolean;
  public timer: Timer;

  constructor(
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
    { player, npcControll, timer }: GameEntities
  ) {
    this.sprites = {};
    this.canvas = canvas;
    this.canvas.width = canvas.width;
    this.canvas.height = canvas.height;
    this.ctx = ctx;
    this.playerOne = player;
    this.timer = timer;
    this.npcControll = npcControll;
    this.gameOver = false;
    this.clashesController = new ClashesController(player, npcControll);
  }

  setSprite(sprites: AllSpritesType) {
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

  renderGameOver(isWin: boolean) {
    if (this.canvas && this.ctx) {
      if (isWin) {
        this.renderGameWinScreen();
      } else {
        this.renderGameLoseScreen();
      }
    }
  }

  renderGameWinScreen() {
    this.prepareCanvas();
    this.ctx.font = '30px PixelDigivolve';
    this.ctx.fillText(
      `YOU WIN!`,
      this.canvas.width / 2 - 60,
      this.canvas.height / 2
    );
  }

  renderGameLoseScreen() {
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

  update(): void {
    this.prepareCanvas();
    this.npcControll.render();
    this.playerOne.render();
    this.timer.render();
  }

  startAnimating(fps: number) {
    this.fpsInterval = 1000 / fps;
    this.then = Date.now();
    this.timer.then = Date.now();
  }

  animate() {
    if (this.then !== undefined && this.fpsInterval !== undefined) {
      this.now = Date.now();
      this.elapsed = this.now - this.then;

      if (this.elapsed > this.fpsInterval) {
        this.then = this.now - (this.elapsed % this.fpsInterval);

        this.update();
        this.clashesController.checkForCollisionsBetweenUserAndNpc();
      }
    }
  }

  stopCycle(isWin = false) {
    if (this.animationRequestId) {
      cancelAnimationFrame(this.animationRequestId);
      this.gameOver = true;
    }
    this.renderGameOver(isWin);
  }

  startCycle() {
    this.startAnimating(10);
    const updater = () => {
      this.animate();
      if (!this.gameOver) {
        this.animationRequestId = requestAnimationFrame(updater); // for subsequent frames
      }
    };
    this.animationRequestId = requestAnimationFrame(updater);
  }
}
