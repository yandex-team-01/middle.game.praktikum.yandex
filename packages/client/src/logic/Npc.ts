import { Sprite } from './Sprite';
import { NpcConstructorOptions, Position } from './types';
import { PlayerOne } from './Player';

enum DirectionNpc {
  Up = 0,
  Down = 1,
  Left = 2,
  Right = 3,
}

export abstract class NpcModel {

  id: number;
  type: string;
  sprite: Sprite | undefined;
  x: number;
  y: number;
  width: number;
  height: number;
  frameX: number;
  frameY: number;
  xSpeed: number ;
  ySpeed: number ;
  isMoving: boolean;
  canvasHeight = 0;
  canvasWidth = 0;
  npcKeys: boolean[] = [];

  constructor(options: NpcConstructorOptions) {
    this.id = options.id;
    this.type = options.type;
    this.x = options.defaultX;
    this.y = options.defaultY;
    this.width = 0;
    this.height = 0;
    this.frameX = 0;
    this.frameY = 0;

    this.xSpeed = 7;
    this.ySpeed = 7;

    //начинаем движение вправо-вниз
    this.isMoving = true;
    this.npcKeys[DirectionNpc.Right] = true;
    this.npcKeys[DirectionNpc.Down] = true;
  }

  setSprite(sprite: Sprite) {
    this.sprite = sprite;
    this.width = sprite.width;
    this.height = sprite.height;
    this.frameX = 0;
    this.frameY = 0;
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
      this.width * this.frameX,
      this.height * this.frameY,
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
    this.isMoving = true;
  }

  checkForCollisions() {
    if ( this.x + this.width > this.canvasWidth || this.x - this.width / 2  < 0 ) {
        this.xSpeed = -this.xSpeed;
        //меняем флаг направления анимации ног влево-вправо
        if(this.npcKeys[DirectionNpc.Right]){
            delete this.npcKeys[DirectionNpc.Right]; 
            this.npcKeys[DirectionNpc.Left] = true; 
        }else{
            delete this.npcKeys[DirectionNpc.Left]; 
            this.npcKeys[DirectionNpc.Right] = true; 
        }

    }
    if ( this.y + this.height > this.canvasHeight || this.y - this.height / 2 < 0 ) {
        this.ySpeed = -this.ySpeed;
        //меняем флаг направления анимации ног вверх-вниз
        if(this.npcKeys[DirectionNpc.Down]){
            delete this.npcKeys[DirectionNpc.Down]; 
            this.npcKeys[DirectionNpc.Up] = true; 
        }else{
            delete this.npcKeys[DirectionNpc.Up]; 
            this.npcKeys[DirectionNpc.Down] = true; 
        }

    }   
  }

  handleNpcLegsFrame() {
    if (this.frameX < 3){ 
        this.frameX++;
    } else {
        this.frameX = 0;
    }
  }

  moveNpc() {
    if (this.npcKeys[DirectionNpc.Up] && this.y > 100){
        this.frameY = 3;
    }
    if (this.npcKeys[DirectionNpc.Left] && this.x > 0){ 
        this.frameY = 1;
    }
    if (this.npcKeys[DirectionNpc.Down] && this.y < this.canvasHeight - this.height){
        this.frameY = 0;
    }
    if (this.npcKeys[DirectionNpc.Right] &&  this.x < this.canvasWidth - this.width){
        this.frameY = 2;
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
