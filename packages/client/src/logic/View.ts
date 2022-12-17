import { Sprite } from './Sprite';
import { ClashesController } from './ClashesController';
import { NpcControll } from './NpcControll';
import { PlayerOne } from './Player';
import { Timer } from './Timer';
import { Speedometer } from './Speedometer';
import { AllSpritesType } from './types';
import { GameEntities } from './types';
import { SPRITE_ID } from './const';
import { Levels } from './Levels';

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
  public speedometer: Speedometer;
  public levels: Levels;

  constructor(
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
    { player, npcControll, timer, speedometer, levels }: GameEntities
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
    this.levels = levels;
    this.clashesController = new ClashesController(
      ctx,
      player,
      npcControll,
      levels
    );
    this.speedometer = speedometer;
  }

  setSprite(sprites: AllSpritesType) {
    this.sprites = sprites;
    this.clashesController.setSprite(
      sprites[SPRITE_ID.COLLISION_TELEPORT],
      sprites[SPRITE_ID.COLLISION_BLOOD]
    );
    this.speedometer.setSprite(sprites[SPRITE_ID.SPEEDOMETER] as Sprite);
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
    this.clashesController.render();
    this.npcControll.render();
    this.playerOne.render();
    this.timer.render();
    this.speedometer.render();
    this.levels.render();
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
