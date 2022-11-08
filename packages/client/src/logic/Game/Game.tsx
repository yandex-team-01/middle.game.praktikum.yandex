import {PlayerOne,PlayerTwo} from '../../logic/Player/Player';
import { GameImageProps } from './types';

export class Game {
 
    private ctx: CanvasRenderingContext2D;
    private width = 800;
    private height = 500;

    private background: HTMLImageElement;

    public fpsInterval: number | undefined; 
    public now: number | undefined;
    public then: number | undefined;
    public elapsed: number | undefined;
    public animationRequestId: number | undefined; 

    private playerOne: PlayerOne;
    private playerTwo: PlayerTwo;
    private gameOverBackgroundAudio: HTMLAudioElement | undefined;

    constructor(protected canvas: HTMLCanvasElement) {
        this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;

        this.canvas.width = this.width;
        this.canvas.height = this.height;

        this.playerOne = new PlayerOne(this.ctx, this.height,this.width);    
        this.playerTwo = new PlayerTwo(this.ctx, this.height,this.width);

        this.background = new Image();
        this.background.src = "/src/assets/images/game-background.png";
    }
    
    destruct(){
        window.removeEventListener('keydown',  this.playerOne.keyDownCustom);
        window.removeEventListener('keydown',  this.playerTwo.keyDownCustom);
        window.removeEventListener('keyup',  this.playerOne.keyUpCustom);
        window.removeEventListener('keyup',  this.playerTwo.keyUpCustom);
        if (this.animationRequestId) {
            cancelAnimationFrame(this.animationRequestId);
        }
    }

    start(){
        this.startAnimating(10);  
        const updater = () => {
            this.animate();
            this.animationRequestId =requestAnimationFrame( updater );  // for subsequent frames
        };
        this.animationRequestId = requestAnimationFrame( updater ); // for the first frame https://stackoverflow.com/a/44975010     
    }

    end(){     
        if(typeof this.gameOverBackgroundAudio === 'undefined'){
            this.gameOverBackgroundAudio = new Audio("/src/assets/audio/game-over.mp3");
            this.gameOverBackgroundAudio.play();
        }
        cancelAnimationFrame(this.animationRequestId as number);
        this.background = new Image();
        this.background.onload = () =>{
            this.ctx.drawImage(this.background, 0, 0, this.canvas.width, this.canvas.height);
        }; //https://stackoverflow.com/a/15058168
        this.background.src = "/src/assets/images/game-over-background.png";          
    } 


    drawSprite(props:GameImageProps){
        this.ctx.drawImage(props.img, props.sX, props.sY, props.sW, props.sH, props.dX, props.dY, props.dW, props.dH);
    }
   

    startAnimating(fps:number){ 
        this.fpsInterval = 1000/fps; 
        this.then = Date.now();
    }

    animate(){
        if (this.then !== undefined && this.fpsInterval !== undefined){
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
}
