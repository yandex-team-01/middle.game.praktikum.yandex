import { GameImageProps } from '../../logic/Game/types';

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

abstract class Player {

    movePlayer!: () => void;
    playerSprite!: HTMLImageElement;
    x: number | undefined;
    y: number | undefined;
    width: number;
    height: number;
    frameX: number; 
    frameY: number; 
    speed: number;
    moving: boolean;
    canvasHeight: number;
    canvasWidth: number;
    propsForPlayerImage: GameImageProps | undefined;
    ctx: CanvasRenderingContext2D;
    
    constructor(ctx: CanvasRenderingContext2D, canvasHeight: number, canvasWidth: number){
        this.width = 40;
        this.height = 72;
        this.frameX = 0; 
        this.frameY = 0; 
        this.speed = 7; 
        this.moving = false;
        this.ctx = ctx;
        this.canvasHeight = canvasHeight;
        this.canvasWidth = canvasWidth;
    }

    drawSprite(props:GameImageProps){
        this.ctx.drawImage(props.img, props.sX, props.sY, props.sW, props.sH, props.dX, props.dY, props.dW, props.dH);
    }

    animate() {
         this.propsForPlayerImage = {img: this.playerSprite, 
            sX: this.width * this.frameX, 
            sY: this.height * this.frameY,
            sW: this.width, sH: this.height, 
            dX: this.x, dY: this.y, 
            dW: this.width, dH: this.height} as GameImageProps;
        this.drawSprite (this.propsForPlayerImage as GameImageProps);
        this.movePlayer();
        this.handlePlayerFrame();
    }

    handlePlayerFrame (){
        if (this.frameX < 3 && this.moving ){ 
            this.frameX++;
        } else {
            this.frameX = 0;
        }
    }
}

export class PlayerOne extends Player {

    constructor(ctx: CanvasRenderingContext2D, canvasHeight: number, canvasWidth: number){
        super(ctx, canvasHeight, canvasWidth);
        this.playerSprite = new Image();
        this.playerSprite.src = "/src/assets/images/game-player.png";
        this.x = 200;
        this.y = 150;

        this.ctx = ctx;
        this.canvasHeight = canvasHeight;
        this.canvasWidth = canvasWidth;

        window.addEventListener('keydown', this.keyDownCustom);
        window.addEventListener('keyup', this.keyUpCustom);
    }
    
    keyDownCustom = (...args:KeyboardEvent[]) => {
        if (args.length>0){
            const event = args[0];
            keys[event.keyCode] = true;
        }
    };

    keyUpCustom = (...args:KeyboardEvent[]) => {
        if (args.length>0){
            const event = args[0];
            delete keys[event.keyCode];
            this.moving = false;
        }
    };
    
    movePlayer = ()=>{
        if(this.y !== undefined && this.x !== undefined){
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
    };
}

export class PlayerTwo extends Player {
 
    constructor(ctx: CanvasRenderingContext2D, canvasHeight: number, canvasWidth: number){
        super(ctx, canvasHeight, canvasWidth);
        this.playerSprite = new Image();
        this.playerSprite.src = "/src/assets/images/game-player-second.png";
        this.x = 250;
        this.y = 200;

        this.ctx = ctx;
        this.canvasHeight = canvasHeight;
        this.canvasWidth = canvasWidth;

        window.addEventListener('keydown', this.keyDownCustom);

        window.addEventListener('keyup', this.keyUpCustom);
    }

    keyDownCustom = (...args:KeyboardEvent[]) => {
        if (args.length>0){
            const event = args[0];
            keys[event.keyCode] = true;
        }
    };

    keyUpCustom = (...args:KeyboardEvent[]) => {
        if (args.length>0){
            const event = args[0];
            delete keys[event.keyCode];
            this.moving = false;
        }
    };

    movePlayer = ()=>{
        if(this.y !== undefined && this.x !== undefined){
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
    };
}
