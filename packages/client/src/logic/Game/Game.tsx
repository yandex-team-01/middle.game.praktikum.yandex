import {PlayerOne,PlayerTwo} from '../../logic/Player/Player';
import { gameImageProps } from './types';

export class Game {
 
    private ctx: CanvasRenderingContext2D;
    private width = 800;
    private height = 500;

    private background!: HTMLImageElement;

    public fpsInterval!: number; 
    public now!:number;
    public then!:number;
    public elapsed!:number;

    private playerOne: PlayerOne
    private playerTwo: PlayerTwo;

    constructor(protected canvas: HTMLCanvasElement) {
        this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;

        this.canvas.width = this.width;
        this.canvas.height = this.height;

        this.playerOne = new PlayerOne();
        this.playerOne.playerSprite = new Image();
        this.playerOne.playerSprite.src = "/src/assets/images/game-player.png";

        this.playerOne.x = 200;
        this.playerOne.y = 150;
        this.playerOne.width = 40;
        this.playerOne.height = 72;
        this.playerOne.frameX = 0; 
        this.playerOne.frameY = 0; 
        this.playerOne.speed = 7; 
        this.playerOne.moving = false;
        this.playerOne.canvasHeight = this.height;
        this.playerOne.canvasWidth = this.width;
        this.playerOne.ctx = this.ctx;
        
        this.playerTwo = new PlayerTwo();
        this.playerTwo.playerSprite = new Image();
        this.playerTwo.playerSprite.src = "/src/assets/images/game-player-second.png";

        this.playerTwo.x = 250;
        this.playerTwo.y = 200;
        this.playerTwo.width = 40;
        this.playerTwo.height = 72;
        this.playerTwo.frameX = 0; 
        this.playerTwo.frameY = 0; 
        this.playerTwo.speed = 7; 
        this.playerTwo.moving = false;
        this.playerTwo.canvasHeight = this.height;
        this.playerTwo.canvasWidth = this.width;
        this.playerTwo.ctx = this.ctx;

        this.background = new Image();
        this.background.src = "/src/assets/images/game-background.png";

    }

    drawSprite(props:gameImageProps){
        this.ctx.drawImage(props.img, props.sX, props.sY, props.sW, props.sH, props.dX, props.dY, props.dW, props.dH);
    }
   

    StartAnimating(fps:number){ 
        this.fpsInterval = 1000/fps; 
        this.then = Date.now();
    }

    animate(){
        this.now = Date.now();
        this.elapsed = this.now - this.then;
        if (this.elapsed > this.fpsInterval){
            
            this.then = this.now - (this.elapsed % this.fpsInterval); 
            this.ctx.clearRect (0,0,this.canvas.width, this.canvas.height); 
            this.ctx.drawImage(this.background, 0, 0, this.canvas.width, this.canvas.height);
            
            this.playerOne.animate(); 
            this.playerTwo.animate();    
        }
    }
}
