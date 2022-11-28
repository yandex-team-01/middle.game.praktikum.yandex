import React from 'react';
import { useAppSelector } from 'src/hooks/redux';
import { removeError } from 'src/store/error/ErrorSlice';
import { ErrorBoundary } from '../ErrorBoundary';
import { ErrorItem } from './ErrorItem';
import styles from './styles.module.scss';
import { selectErrorList } from 'src/store/error/ErrorSelectors';
import { useBoundAction } from 'src/pages/Forum/part/Topic/helper';

export const ErrorsNotification = () => {
  const errorList = useAppSelector(selectErrorList);

  const handleClose = useBoundAction((id: string) => removeError(id));

  return (
    <ErrorBoundary>
      <div className={styles.error_container}>
        {errorList.map(item => (
          <ErrorItem
            text={item.text}
            id={item.id}
            key={item.id}
            closeHandler={handleClose}
          />
        ))}
      </div>
    </ErrorBoundary>
  );
};
