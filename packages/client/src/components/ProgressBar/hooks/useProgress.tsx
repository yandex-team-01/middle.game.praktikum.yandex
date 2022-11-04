import { useState, useEffect } from 'react';

export const useProgress = () => {
  const [running, setRunning] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let id: ReturnType<typeof setInterval> = 0;

    if (running) {
      id = setInterval(() => {
        setProgress(prev => prev + 5);
      }, 500);
    }
    return () => {
      clearInterval(id);
    };
  }, [running]);

  useEffect(() => {
    if (progress === 100) {
      setRunning(false);
    }
  }, [progress]);

  return [progress];
};
