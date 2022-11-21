import { useState } from 'react';

export function useFullScreen(initialIsFullScreen = false) {
    
    const [isFullScreen, setValue] = useState(initialIsFullScreen);
    
    function toggleIsFullScreen() {
        setValue(previousValue => !previousValue);
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
          } else if (document.exitFullscreen) {
            document.exitFullscreen();
          }
    }

    return [isFullScreen, toggleIsFullScreen] as const;
} 
