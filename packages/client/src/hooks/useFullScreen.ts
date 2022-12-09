import { useState } from 'react';

export const useFullScreen = (initialIsFullScreen = false) => {
  const [isFullScreen, setValue] = useState(initialIsFullScreen);

  const toggleIsFullScreen = () => {
    setValue(previousValue => !previousValue);
    // На сервере нет window и document так что нужно проверять либо так либо чекать через env переменную уоторую выставляет vite
    if (typeof document !== 'undefined' && !document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  return [isFullScreen, toggleIsFullScreen] as const;
};
