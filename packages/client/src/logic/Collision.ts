import { Sprite } from './Sprite';
import { GAME_SETTINGS } from './const';
export class Collision {
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  width = 0;
  height = 0;
  sprite: Sprite | undefined;
  skinHorizontalFrame = GAME_SETTINGS.SKIN_HORIZONTAL_FRAME;
  skinTotalNumberOfHorizontalFrames =
    GAME_SETTINGS.SKIN_TOTAL_NUMBER_OF_HORIZONTAL_FRAMES;
  skinVerticalFrame = GAME_SETTINGS.SKIN_VERTICAL_FRAME;
  isCollisionWithEnemy: boolean | undefined;
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
