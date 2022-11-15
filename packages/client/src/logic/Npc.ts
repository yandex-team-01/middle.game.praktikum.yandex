import { Sprite } from './Sprite';
import { NpcConstructorOptions, Position } from './types';
import { PlayerOne } from './Player';

enum DirectionNpc { 
  Down = 0,
  Left,
  Right,
  Up
}
  
export abstract class NpcModel {
  id: number;
  type: string;
  sprite: Sprite | undefined;
  x: number;
  y: number;
  width: number;
  height: number;
  skinLegsFrame: number;
  skinDirectionFrame: number;
  xSpeed: number ;
  ySpeed: number ;
  canvasHeight = 0;
  canvasWidth = 0;
  npcCurrentDirection: boolean[] = [];

  constructor(options: NpcConstructorOptions) {
    this.id = options.id;
    this.type = options.type;
    this.x = options.defaultX;
    this.y = options.defaultY;
    this.width = 0;
    this.height = 0;
    this.skinLegsFrame = 0;
    this.skinDirectionFrame = 0;
    this.xSpeed = 7;
    this.ySpeed = 7;
    this.startMoving();
  }

  startMoving(){
    //начинаем движение вправо-вниз
    this.npcCurrentDirection[DirectionNpc.Right] = true;
    this.npcCurrentDirection[DirectionNpc.Down] = true;
  }

  setSprite(sprite: Sprite) {
    this.sprite = sprite;
    this.width = sprite.width;
    this.height = sprite.height;
    this.skinLegsFrame = 0;
    this.skinDirectionFrame = 0;
  }

  getPosition(): Position {
    return {
      x1: this.x,
      x2: this.x + this.width,
      y1: this.y,
      y2: this.y + this.height,
    };
  }

  render(ctx: CanvasRenderingContext2D,canvasHeight:number,canvasWidth:number)   {
    if (!this.sprite) {
      return;
    }
    this.canvasHeight = canvasHeight;
    this.canvasWidth = canvasWidth;
    ctx.drawImage(
      this.sprite.image,
      this.width * this.skinLegsFrame,
      this.height * this.skinDirectionFrame,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
    ctx.strokeRect(this.x, this.y, this.width, this.height);
    this.animate();
  }

  animate() {
    this.updateNpcCoordinates();
    this.checkForCollisions();
    this.moveNpc();
    this.handleNpcLegsFrame();
    
  }

  updateNpcCoordinates() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }

  checkForCollisions() {
    if ( this.x + this.width > this.canvasWidth || this.x - this.width / 2  < 0 ) {
        this.xSpeed = -this.xSpeed;
        //меняем флаг направления анимации ног влево-вправо
        if(this.npcCurrentDirection[DirectionNpc.Right]){
            this.npcCurrentDirection[DirectionNpc.Right] = false; 
            this.npcCurrentDirection[DirectionNpc.Left] = true; 
        }else{
            this.npcCurrentDirection[DirectionNpc.Left] = false; 
            this.npcCurrentDirection[DirectionNpc.Right] = true; 
        }

    }
    if ( this.y + this.height > this.canvasHeight || this.y - this.height / 2 < 0 ) {
        this.ySpeed = -this.ySpeed;
        //меняем флаг направления анимации ног вверх-вниз
        if(this.npcCurrentDirection[DirectionNpc.Down]){
            this.npcCurrentDirection[DirectionNpc.Down] = false; 
            this.npcCurrentDirection[DirectionNpc.Up] = true; 
        }else{
            this.npcCurrentDirection[DirectionNpc.Up] = false; 
            this.npcCurrentDirection[DirectionNpc.Down] = true; 
        }

    }   
  }

  handleNpcLegsFrame() {
    if (this.skinLegsFrame < 3){ 
        this.skinLegsFrame++;
    } else {
        this.skinLegsFrame = 0;
    }
  }

  moveNpc() {
    if (this.npcCurrentDirection[DirectionNpc.Up] && this.y > 100){
        this.skinDirectionFrame = DirectionNpc.Up;
    }
    if (this.npcCurrentDirection[DirectionNpc.Left] && this.x > 0){ 
        this.skinDirectionFrame = DirectionNpc.Left;
    }
    if (this.npcCurrentDirection[DirectionNpc.Down] && this.y < this.canvasHeight - this.height){
        this.skinDirectionFrame = DirectionNpc.Down;
    }
    if (this.npcCurrentDirection[DirectionNpc.Right] &&  this.x < this.canvasWidth - this.width){
        this.skinDirectionFrame = DirectionNpc.Right;
    }
  };
}

export class NpcEnemy extends NpcModel {
  constructor(options: NpcConstructorOptions) {
    super(options);
  }

  collisionHandling(player: PlayerOne) {
    player.subtractHP();
  }
}

export class NpcFriend extends NpcModel {
  defineBonus: number;

  constructor(options: NpcConstructorOptions) {
    super(options);
    this.defineBonus = 5;
  }

  collisionHandling(player: PlayerOne) {
    player.addScore(this.defineBonus);
  }
}
