import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { removeError } from '../../store/error/ErrorSlice';
import { ErrorBoundary } from '../ErrorBoundary';
import { ErrorItem } from './ErrorItem';
import styles from './styles.module.scss';

export const ErrorsNotification = () => {
  const errorList = useAppSelector(store => store.error.errorList);
  const dispath = useAppDispatch();

  const closeHandler = (id: string) => {
    dispath(removeError(id));
  };

  return (
    <ErrorBoundary>
      <div className={styles.error_container}>
        {errorList.map(item => (
          <ErrorItem
            text={item.text}
            id={item.id}
            key={item.id}
            closeHandler={closeHandler}
          />
        ))}
      </div>
    </ErrorBoundary>
  );
};
