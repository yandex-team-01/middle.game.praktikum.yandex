import React from 'react';
import { ErrorBoundary } from '../ErrorBoundary';
import styles from './Preloader.module.scss';

export const Preloader = () => {
  return (
    <ErrorBoundary>
      <div className={styles.preloader_back}>
        <div className={styles.preloader} />
      </div>
    </ErrorBoundary>
  );
};
