import React from 'react';
import styles from './GameLoadingPage.module.scss';
import { Spinner } from 'src/components/Spinner';
import { ProgressBar } from 'src/components/ProgressBar';
import { useProgress } from 'src/components/ProgressBar/hooks/useProgress';
import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { useNavigator } from 'src/hooks/useNavigator';
import { TitleGame } from 'src/components/TitleGame';

const progress_bar_accent = '#FFCC00';

export const GameLoadingPage: React.FC = () => {
  const navigator = useNavigator();
  const [progress] = useProgress();

  if (progress === 100) {
    navigator('/game');
  }

  return (
    <ErrorBoundary>
      <div className={styles.game_loading_root}>
        <TitleGame className={styles.game_loading_title} />
        <Spinner />
        <div className={styles.bar_container}>
          <ProgressBar completed={progress} bgcolor={progress_bar_accent} />
        </div>
        <div className={styles.percent}>{progress} %</div>
      </div>
    </ErrorBoundary>
  );
};
