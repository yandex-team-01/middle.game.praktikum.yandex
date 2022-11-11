import { SpriteOptions, AllSpritesType } from './types';
import { spritesOptions } from './const';

export class AllSprites {
  private defoultSprites = spritesOptions;
  public sprites: AllSpritesType;

  constructor() {
    this.sprites = {};
  }

  private prepareSprite = (sprite: Sprite) => {
    if (this.sprites[sprite.id]) {
      throw Error('error');
    }

    this.sprites[sprite.id] = sprite;
  };

  public async prepareSprites() {
    const sprites = this.defoultSprites.map(options => new Sprite(options));

    sprites.forEach(this.prepareSprite);
    await Promise.all(sprites.map(sprite => sprite.load()));
  }

  public getSprites() {
    return this.sprites;
  }
}

export class Sprite {
  public id: number | string;
  public src: string;
  public image: HTMLImageElement;
  public width: number;
  public height: number;

  constructor(options: SpriteOptions) {
    this.id = options.id;
    this.width = options.width;
    this.height = options.height;
    this.src = options.src;
    this.image = new Image();
  }

  load(): Promise<Sprite> {
    return new Promise((resolve, reject) => {
      this.image.src = this.src;
      this.image.onload = () => resolve(this);
      this.image.onerror = () => reject(new Error('error load image'));
    });
  }
}
