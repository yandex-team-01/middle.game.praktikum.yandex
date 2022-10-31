import React, { useEffect } from 'react';
import styles from './PopupError.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { errorSlice } from '../../store/slices/ErrorSlice';

export const PopupError = (): JSX.Element | null => {
  const error = useAppSelector(store => store.errorSlice.error);
  const dispath = useAppDispatch();
  const { setError } = errorSlice.actions;

  useEffect(() => {
    if (error) {
      const id = setTimeout(() => {
        dispath(setError(''));
      }, 3000);

      return () => clearTimeout(id);
    }
  }, [error]);

  if (!error) {
    return null;
  }

  return (
    <div className={styles.error_block}>
      <p className={styles.error_text}>{error}</p>
    </div>
  );
};
