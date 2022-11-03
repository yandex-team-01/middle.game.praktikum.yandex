import React from 'react';
import styles from './styles.module.scss';
import { Props } from './types';

export const ErrorItem = ({ text, id, closeHandler }: Props) => {
  return (
    <div className={styles.error}>
      <p className={styles.error_text}>{text}</p>

      <svg
        width="17"
        height="17"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.error_button}
        onClick={() => {
          closeHandler(id);
        }}>
        <g
          strokeWidth="2"
          stroke="#fff"
          fill="none"
          fillRule="evenodd"
          strokeLinecap="round">
          <path d="m1 1 14.142 14.142M15 1 1 15" />
        </g>
      </svg>
    </div>
  );
};
