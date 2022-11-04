import {Game} from './Game';

export interface gameImageProps extends Game {
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