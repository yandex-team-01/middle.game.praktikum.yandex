import React from 'react';
import styles from './spinner.module.scss';

export const Spinner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.ispinner_blade}></div>
      <div className={styles.ispinner}>
        <div className={styles.ispinner_blade}></div>
        <div className={styles.ispinner_blade}></div>
        <div className={styles.ispinner_blade}></div>
        <div className={styles.ispinner_blade}></div>
        <div className={styles.ispinner_blade}></div>
        <div className={styles.ispinner_blade}></div>
        <div className={styles.ispinner_blade}></div>
        <div className={styles.ispinner_blade}></div>
      </div>
    </div>
  );
};
