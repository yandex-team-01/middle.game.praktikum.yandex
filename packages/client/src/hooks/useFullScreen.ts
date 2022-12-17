import { useState } from 'react';
import { getEnvSsrAndProd } from 'src/utils/getEnvSsrAndProd';

export const useFullScreen = (initialIsFullScreen = false) => {
  const [isFullScreen, setValue] = useState(initialIsFullScreen);
  const env = getEnvSsrAndProd();

  const toggleIsFullScreen = () => {
    setValue(previousValue => !previousValue);
    if (env.isSSR) {
      return;
    }
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  return [isFullScreen, toggleIsFullScreen] as const;
};
