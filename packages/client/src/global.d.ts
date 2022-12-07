import { PreloadedState } from 'src/store/types';

declare global {
  interface Window {
    __PRELOADED_STATE__?: PreloadedState;
  }
}
