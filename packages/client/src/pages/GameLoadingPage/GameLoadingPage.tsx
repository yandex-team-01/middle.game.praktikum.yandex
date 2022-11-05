import React, { useEffect } from 'react';
import styles from './GameLoadingPage.module.scss';
import { Spinner } from 'src/components/Spinner';
import { ProgressBar } from 'src/components/ProgressBar';
import { useProgress } from 'src/components/ProgressBar/hooks/useProgress';
import { useNavigate } from 'react-router-dom';

export const GameLoadingPage: React.FC = () => {
  const [progress] = useProgress();
  const navigate = useNavigate();

  useEffect(() => {
    if (progress === 100) {
      navigate('/game');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progress]);

  return (
    <div className={styles.game_loading_root}>
      <h1 className={styles.game_loading_title}>
        Huggy Wuggy
        <br />& Kissy Missy
      </h1>
      <Spinner />
      <div className={styles.bar_container}>
        <ProgressBar completed={progress} bgcolor={'#FFCC00'} />
      </div>
      <div className={styles.percent}>{progress} %</div>
    </div>
  );
};
