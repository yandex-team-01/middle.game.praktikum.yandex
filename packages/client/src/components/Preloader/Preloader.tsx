import React from 'react';
import styles from './Preloader.module.scss';

export const Preloader = () => {
  return (
    <div className={styles.preloader_back}>
      <div className={styles.preloader} />
    </div>
  );
};
