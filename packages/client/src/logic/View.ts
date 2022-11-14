import { NpcControll } from './NpcControll';
import { PlayerOne } from './Player/Player';
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

  constructor(
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
    { player, npcControll }: GameEntities
  ) {
    this.sprites = {};
    this.canvas = canvas;
    this.canvas.width = 800;
    this.canvas.height = 500;
    this.ctx = ctx;
    this.playerOne = player;
    this.npcControll = npcControll;
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

  update(): void {
    this.prepareCanvas();
    this.npcControll.render(this.ctx);
    this.playerOne.render(this.ctx);
  }

  startAnimating(fps: number) {
    this.fpsInterval = 1000 / fps;
    this.then = Date.now();
  }

  checkСollision(): void {
    // TODO: вынесу в отдельный класс когда усложню логику столкновения
    const posPlayer = this.playerOne.position;

    this.npcControll.arrNpc.forEach(npc => {
      const posNpc = npc.position;
      let XColl = false;
      let YColl = false;
      if (posPlayer.x2 >= posNpc.x1 && posPlayer.x1 <= posNpc.x2) XColl = true;
      if (posPlayer.y2 >= posNpc.y1 && posPlayer.y1 <= posNpc.y2) YColl = true;
      if (XColl && YColl) {
        console.log('столкновение!');
      }
    });
  }

  animate() {
    if (this.then !== undefined && this.fpsInterval !== undefined) {
      this.now = Date.now();
      this.elapsed = this.now - this.then;
      if (this.elapsed > this.fpsInterval) {
        this.then = this.now - (this.elapsed % this.fpsInterval);
        this.checkСollision();
        this.update();
      }
    }
  }

  stopCycle() {
    if (this.animationRequestId) {
      cancelAnimationFrame(this.animationRequestId);
    }
    this.renderGameOver();
  }

  startCycle() {
    this.startAnimating(10);
    const updater = () => {
      this.animate();
      this.animationRequestId = requestAnimationFrame(updater); // for subsequent frames
    };
    this.animationRequestId = requestAnimationFrame(updater);
  }
}
