import { Game } from './Game';
import { GameEntities } from './types';

export class Timer {
    private ctx: CanvasRenderingContext2D;
    private canvasWidth: number;
    private gameRoundDuration: number | undefined;
    private gameStartMoment: Date | undefined;
    private gameEndMoment: Date | undefined;
    private gameTimer: number | undefined;
    private game: Game;
    private now: number | undefined;
    public then: number | undefined;
    private elapsedTimer: number | undefined;

    constructor(
        ctx: CanvasRenderingContext2D,
        canvasHeight: number,
        canvasWidth: number,
        { game }: GameEntities
      ) {
        this.ctx = ctx;
        this.canvasHeight = canvasHeight;
        this.canvasWidth = canvasWidth;
        this.game = game;
        this.initGameTimer();
      }

      initGameTimer(){
        this.gameRoundDuration = 1*60000; //the reason we multiply minutes by 60000 is to convert minutes to milliseconds
        this.gameStartMoment = new Date();
        this.gameEndMoment = new Date(this.gameStartMoment.getTime() + this.gameRoundDuration);
        this.gameTimer = (this.gameEndMoment.getTime() - this.gameStartMoment.getTime())/1000;
      }

      render() {
        this.ctx.font = '30px PixelDigivolve';
        this.ctx.fillText(`${this.gameTimer}`, this.canvasWidth/2, 40);
        this.animate();
      }

      animate(){
        this.now = Date.now();
        if (this.then) {
          this.elapsedTimer = this.now - this.then;
          if(this.gameTimer && this.elapsedTimer && this.elapsedTimer >= 1000){
            this.then = this.now - (this.elapsedTimer % 1000);
            this.gameTimer--;
          }
        }

        if (this.gameEndMoment && new Date() >= this.gameEndMoment){
            this.game.end(true);
          }
      }
}