import { Game } from './Game';

export interface GameImageProps extends Game {
  img: CanvasImageSource;
  sX: number;
  sY: number;
  sW: number;
  sH: number;
  dX: number;
  dY: number;
  dW: number;
  dH: number;
}
