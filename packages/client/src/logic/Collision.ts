import { Sprite } from './Sprite';

export class Collision {
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  width = 0;
  height = 0;
  sprite: Sprite | undefined;
  skinHorizontalFrame = 0;
  skinTotalNumberOfHorizontalFrames = 3;
  skinFirstHorizontalFrame = 0;
  skinVerticalFrame = 0;
  constructor(ctx: CanvasRenderingContext2D, x: number, y: number) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
  }
  setSprite(sprite: Sprite) {
    this.sprite = sprite;
    this.width = sprite.width;
    this.height = sprite.height;
  }

  render() {
    if (!this.sprite) {
      return;
    }
    this.ctx.drawImage(
      this.sprite.image,
      this.width * this.skinHorizontalFrame,
      this.height * this.skinVerticalFrame,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
    this.animate();
  }

  animate() {
    if (this.skinHorizontalFrame < this.skinTotalNumberOfHorizontalFrames) {
      this.skinHorizontalFrame++;
    }
  }
}
