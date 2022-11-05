import { PlayerOne, PlayerTwo } from 'src/logic/Player/Player';
import { GameImageProps } from './types';

export class Game {

  private ctx: CanvasRenderingContext2D;
  private width = 800;
  private height = 500;

  private background!: HTMLImageElement;

  public fpsInterval!: number;
  public now!: number;
  public then!: number;
  public elapsed!: number;

  private playerOne: PlayerOne;
  private playerTwo: PlayerTwo;

  constructor(protected canvas: HTMLCanvasElement) {
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;

    this.canvas.width = this.width;
    this.canvas.height = this.height;

    this.playerOne = new PlayerOne();
    this.playerOne.canvasHeight = this.height;
    this.playerOne.canvasWidth = this.width;
    this.playerOne.ctx = this.ctx;

    this.playerTwo = new PlayerTwo();
    this.playerTwo.canvasHeight = this.height;
    this.playerTwo.canvasWidth = this.width;
    this.playerTwo.ctx = this.ctx;

    this.background = new Image();
    this.background.src = "/src/assets/images/game-background.png";

  }

  destruct() {
    this.keyupCustom = this.keyupCustom.bind(this);
    window.removeEventListener('keyup', this.keyupCustom);
  }

  keyupCustom() {
    this.playerOne.keyupCustom();
    this.playerTwo.keyupCustom();
  }

  start(gameRef: Game) {
    if (gameRef) {
      gameRef.StartAnimating(10);

      const updater = function () {
        gameRef.animate();
        requestAnimationFrame(updater);  // for subsequent frames
      };

      requestAnimationFrame(updater);  // for the first frame https://stackoverflow.com/a/44975010
    }
  }

  drawSprite(props: GameImageProps) {
    this.ctx.drawImage(props.img, props.sX, props.sY, props.sW, props.sH, props.dX, props.dY, props.dW, props.dH);
  }


  StartAnimating(fps: number) {
    this.fpsInterval = 1000 / fps;
    this.then = Date.now();
  }

  animate() {
    this.now = Date.now();
    this.elapsed = this.now - this.then;
    if (this.elapsed > this.fpsInterval) {

      this.then = this.now - (this.elapsed % this.fpsInterval);
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.drawImage(this.background, 0, 0, this.canvas.width, this.canvas.height);

      this.playerOne.animate();
      this.playerTwo.animate();
    }
  }
}
