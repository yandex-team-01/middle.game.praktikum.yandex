import React from 'react';
import styles from './ProgressBar.module.scss';

type BarProps = {
  bgcolor: string;
  completed: number;
};

export const ProgressBar = ({ bgcolor, completed }: BarProps) => {
  return (
    <div className={styles.container}>
      <div
        className={styles.filler}
        style={
          {
            backgroundColor: `${bgcolor}`,
            width: `${completed}%`,
          } as React.CSSProperties
        }></div>
    </div>
  );
};
