import { PreloadedState } from 'src/store/types';
import { Resource } from 'i18next';

declare global {
  interface Window {
    __PRELOADED_STATE__?: PreloadedState;
    initialLanguage?: string;
    initialI18nStore?: Resource;
  }
}
