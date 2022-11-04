import { gameImageProps } from '../../logic/Game/types';

const keys:boolean[] = [];

enum DirectionPlayerOne {
    Up = 38,
    Down = 40,
    Left = 37,
    Right = 39,
  }

  enum DirectionPlayerTwo {
    Up = 87,
    Down = 83,
    Left = 65,
    Right = 68,
  }

interface Player {
    animate: () => void;
    handlePlayerFrame: () => void;
    movePlayer: () => void;
    drawSprite: (props:gameImageProps) => void;
    playerSprite: HTMLImageElement;
    x: number;
    y: number;
    width: number;
    height: number;
    frameX: number; 
    frameY: number; 
    speed: number;
    moving: boolean;
    canvasHeight: number;
    canvasWidth: number; 
    propsForPlayerImage: gameImageProps; 
    ctx: CanvasRenderingContext2D;
}

export class PlayerOne implements Player {

    playerSprite!: HTMLImageElement;
    x!: number;
    y!: number;
    width!: number;
    height!: number;
    frameX!: number; 
    frameY!: number; 
    speed!: number;
    moving!: boolean;
    canvasHeight!: number;
    canvasWidth!: number;
    propsForPlayerImage!:gameImageProps;
    ctx!: CanvasRenderingContext2D;

    constructor(){

        window.addEventListener("keydown", function(e){
            keys[e.keyCode] = true;
        });

        this.keyupCustom = this.keyupCustom.bind(this);

        window.addEventListener('keyup', this.keyupCustom);
    }
    
    keyupCustom(...args:KeyboardEvent[]) {
        if (args.length>0){
            const event = args[0];
            delete keys[event.keyCode];
            this.moving = false;
        }
    }
    
    drawSprite(props:gameImageProps){
        this.ctx.drawImage(props.img, props.sX, props.sY, props.sW, props.sH, props.dX, props.dY, props.dW, props.dH);
    }

    animate() {
         this.propsForPlayerImage = {img: this.playerSprite, 
            sX: this.width * this.frameX, 
            sY: this.height * this.frameY,
            sW: this.width, sH: this.height, 
            dX: this.x, dY: this.y, 
            dW: this.width, dH: this.height} as gameImageProps;
        this.drawSprite (this.propsForPlayerImage as gameImageProps);

        this.movePlayer();
        this.handlePlayerFrame();
    }

    handlePlayerFrame (){
        if (this.frameX < 3 && this.moving ){ 
            this.frameX++
        } else {
            this.frameX = 0;
        }
    }

    movePlayer(){
        if (keys[DirectionPlayerOne.Up] && this.y > 100){
            this.y -= this.speed;
            this.frameY = 3;
            this.moving = true;
        }
        if (keys[DirectionPlayerOne.Left] && this.x > 0){ 
            this.x -= this.speed;
            this.frameY = 1;
            this.moving = true;
        }
        if (keys[DirectionPlayerOne.Down] && this.y < this.canvasHeight - this.height){
            this.y += this.speed;
            this.frameY = 0;
            this.moving = true;
        }
        if (keys[DirectionPlayerOne.Right] &&  this.x < this.canvasWidth - this.width){
            this.x += this.speed;    
            this.frameY = 2;
            this.moving = true;
        }
    }
}

export class PlayerTwo implements Player {
    playerSprite!: HTMLImageElement;
    x!: number;
    y!: number;
    width!: number;
    height!: number;
    frameX!: number; 
    frameY!: number; 
    speed!: number;
    moving!: boolean;
    canvasHeight!: number;
    canvasWidth!: number;
    propsForPlayerImage!:gameImageProps;
    ctx!: CanvasRenderingContext2D;

    constructor(){
        window.addEventListener("keydown", function(e){
            keys[e.keyCode] = true;
        });

        this.keyupCustom = this.keyupCustom.bind(this);
        window.addEventListener('keyup', this.keyupCustom);
    }

    keyupCustom(...args:KeyboardEvent[]) {
        if (args.length>0){
            const event = args[0];
            delete keys[event.keyCode];
            this.moving = false;
        }
    }

    drawSprite(props:gameImageProps){
        this.ctx.drawImage(props.img, props.sX, props.sY, props.sW, props.sH, props.dX, props.dY, props.dW, props.dH);
    }

    animate() {
         this.propsForPlayerImage = {img: this.playerSprite, 
            sX: this.width * this.frameX, 
            sY: this.height * this.frameY,
            sW: this.width, sH: this.height, 
            dX: this.x, dY: this.y, 
            dW: this.width, dH: this.height} as gameImageProps;
        this.drawSprite (this.propsForPlayerImage as gameImageProps);

        this.movePlayer();
        this.handlePlayerFrame();
    }
    
    handlePlayerFrame (){
        if (this.frameX < 3 && this.moving ){ 
            this.frameX++
        } else {
            this.frameX = 0;
        }
    }

    movePlayer(){
        if (keys[DirectionPlayerTwo.Up] && this.y > 100){
            this.y -= this.speed;
            this.frameY = 3;
            this.moving = true;
        }
        if (keys[DirectionPlayerTwo.Left] && this.x > 0){ 
            this.x -= this.speed;
            this.frameY = 1;
            this.moving = true;
        }
        if (keys[DirectionPlayerTwo.Down] && this.y < this.canvasHeight - this.height){
            this.y += this.speed;
            this.frameY = 0;
            this.moving = true;
        }
        if (keys[DirectionPlayerTwo.Right] &&  this.x < this.canvasWidth - this.width){
            this.x += this.speed;    
            this.frameY = 2;
            this.moving = true;
        }
    }
}
