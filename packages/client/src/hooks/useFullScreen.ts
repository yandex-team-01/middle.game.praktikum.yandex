import { useState } from 'react';

export const useFullScreen = (initialIsFullScreen = false) => {
  const [isFullScreen, setValue] = useState(initialIsFullScreen);

  const toggleIsFullScreen = () => {
    setValue(previousValue => !previousValue);
    if (typeof document !== 'undefined' && !document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  return [isFullScreen, toggleIsFullScreen] as const;
};
