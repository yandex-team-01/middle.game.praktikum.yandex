import { useState, useEffect } from 'react';

export const useProgress = () => {
  const [progress, setProgress] = useState(0);
  const isRunning = progress <= 100;

  useEffect(() => {
    let id: ReturnType<typeof setInterval> = 0;

    if (isRunning) {
      id = setInterval(() => {
        setProgress(prev => prev + 5);
      }, 500);
    }
    return () => {
      clearInterval(id);
    };
  }, [isRunning]);

  return [progress];
};
