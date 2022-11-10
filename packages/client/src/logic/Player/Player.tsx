import { Sprite } from '../Sprite';

const keys: boolean[] = [];

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

  sprite: Sprite | undefined;
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
  ctx: CanvasRenderingContext2D;

  constructor(
    ctx: CanvasRenderingContext2D,
    canvasHeight: number,
    canvasWidth: number
  ) {
    this.width = 0;
    this.height = 0;
    this.x = 0;
    this.y = 0;

    this.frameX = 0;
    this.frameY = 0;
    this.speed = 7;
    this.moving = false;

    this.ctx = ctx;
    this.canvasHeight = canvasHeight;
    this.canvasWidth = canvasWidth;
  }
  animate() {
    this.movePlayer();
    this.handlePlayerFrame();
  }

  setSprite(sprite: Sprite) {
    // из файла Game передаю предварительно загруженный sprite
    this.sprite = sprite;
    this.width = sprite.width;
    this.height = sprite.height;
  }

  handlePlayerFrame() {
    if (this.frameX < 3 && this.moving) {
      this.frameX++;
    } else {
      this.frameX = 0;
    }
  }

  get position() {
    return [this.x, this.x + this.width, this.y, this.y + this.height];
  }
}

export class PlayerOne extends Player {
  constructor(
    ctx: CanvasRenderingContext2D,
    canvasHeight: number,
    canvasWidth: number
  ) {
    super(ctx, canvasHeight, canvasWidth);
    this.x = 200;
    this.y = 150;

    this.ctx = ctx;
    this.canvasHeight = canvasHeight;
    this.canvasWidth = canvasWidth;

    //TODO: вынести подписку на события в отдельный controll
    window.addEventListener('keydown', this.keyDownCustom);
    window.addEventListener('keyup', this.keyUpCustom);
  }

  keyDownCustom = (...args: KeyboardEvent[]) => {
    if (args.length > 0) {
      const event = args[0];
      keys[event.keyCode] = true;
    }
  };

  keyUpCustom = (...args: KeyboardEvent[]) => {
    if (args.length > 0) {
      const event = args[0];
      delete keys[event.keyCode];
      this.moving = false;
    }
  };

  movePlayer = () => {
    if (this.y !== undefined && this.x !== undefined) {
      if (keys[DirectionPlayerOne.Up] && this.y > 100) {
        this.y -= this.speed;
        this.frameY = 3;
        this.moving = true;
      }
      if (keys[DirectionPlayerOne.Left] && this.x > 0) {
        this.x -= this.speed;
        this.frameY = 1;
        this.moving = true;
      }
      if (
        keys[DirectionPlayerOne.Down] &&
        this.y < this.canvasHeight - this.height
      ) {
        this.y += this.speed;
        this.frameY = 0;
        this.moving = true;
      }
      if (
        keys[DirectionPlayerOne.Right] &&
        this.x < this.canvasWidth - this.width
      ) {
        this.x += this.speed;
        this.frameY = 2;
        this.moving = true;
      }
    }
  };
}

export class PlayerTwo extends Player {
  constructor(
    ctx: CanvasRenderingContext2D,
    canvasHeight: number,
    canvasWidth: number
  ) {
    super(ctx, canvasHeight, canvasWidth);
    this.x = 250;
    this.y = 200;

    this.ctx = ctx;
    this.canvasHeight = canvasHeight;
    this.canvasWidth = canvasWidth;

    window.addEventListener('keydown', this.keyDownCustom);

    window.addEventListener('keyup', this.keyUpCustom);
  }

  keyDownCustom = (...args: KeyboardEvent[]) => {
    if (args.length > 0) {
      const event = args[0];
      keys[event.keyCode] = true;
    }
  };

  keyUpCustom = (...args: KeyboardEvent[]) => {
    if (args.length > 0) {
      const event = args[0];
      delete keys[event.keyCode];
      this.moving = false;
    }
  };

  movePlayer = () => {
    if (this.y !== undefined && this.x !== undefined) {
      if (keys[DirectionPlayerTwo.Up] && this.y > 100) {
        this.y -= this.speed;
        this.frameY = 3;
        this.moving = true;
      }
      if (keys[DirectionPlayerTwo.Left] && this.x > 0) {
        this.x -= this.speed;
        this.frameY = 1;
        this.moving = true;
      }
      if (
        keys[DirectionPlayerTwo.Down] &&
        this.y < this.canvasHeight - this.height
      ) {
        this.y += this.speed;
        this.frameY = 0;
        this.moving = true;
      }
      if (
        keys[DirectionPlayerTwo.Right] &&
        this.x < this.canvasWidth - this.width
      ) {
        this.x += this.speed;
        this.frameY = 2;
        this.moving = true;
      }
    }
  };
}
