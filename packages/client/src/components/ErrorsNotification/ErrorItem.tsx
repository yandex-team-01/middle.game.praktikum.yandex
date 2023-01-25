import React, { memo } from 'react';
import styles from './styles.module.scss';
import { Props } from './types';
import IconClose from 'src/assets/icons/close.svg';

export const ErrorItem = memo(({ text, id, closeHandler }: Props) => {
  setTimeout(() => closeHandler(id), 2000);
  return (
    <div className={styles.error}>
      <p className={styles.error_text}>{text}</p>
      <img
        src={IconClose}
        className={styles.error_button}
        onClick={() => {
          closeHandler(id);
        }}
      />
    </div>
  );
});
