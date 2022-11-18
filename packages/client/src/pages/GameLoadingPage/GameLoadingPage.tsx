import React from 'react';
import styles from './GameLoadingPage.module.scss';
import { Spinner } from 'src/components/Spinner';
import { ProgressBar } from 'src/components/ProgressBar';
import { useProgress } from 'src/components/ProgressBar/hooks/useProgress';
import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { useNavigator } from 'src/hooks/useNavigator';

export const GameLoadingPage: React.FC = () => {
  const navigator = useNavigator();
  const [progress] = useProgress();

  if (progress === 100) {
    navigator('/game');
  }

  return (
    <ErrorBoundary>
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
    </ErrorBoundary>
  );
};
