import { useState } from 'react';
import { getEnvSsr } from 'src/constants/Env';

export const useFullScreen = (initialIsFullScreen = false) => {
  const [isFullScreen, setValue] = useState(initialIsFullScreen);

  const toggleIsFullScreen = () => {
    setValue(previousValue => !previousValue);
    // На сервере нет window и document так что нужно проверять либо так либо чекать через env переменную уоторую выставляет vite
    const isSsr = getEnvSsr();
    if (isSsr && !document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  return [isFullScreen, toggleIsFullScreen] as const;
};
