import React from 'react';
import styles from './BlankWindow.module.scss';
import cn from 'classnames';
import { Props } from './types';
import { ErrorBoundary } from '../ErrorBoundary';

export const BlankWindow = ({
  children,
  className
}: Props): JSX.Element => (
  <ErrorBoundary>
    <div className={cn(styles.app, className)}>
      {children}
    </div>
  </ErrorBoundary>
);

