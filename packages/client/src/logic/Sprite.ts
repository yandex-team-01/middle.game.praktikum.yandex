import { SpriteOptions } from './types';

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
