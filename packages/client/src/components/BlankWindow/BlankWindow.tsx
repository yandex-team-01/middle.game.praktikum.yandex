import styles from './BlankWindow.module.scss';
import cn from 'classnames';
import { Props } from './types';
import { ErrorBoundary } from '../ErrorBoundary';

export const BlankWindow = ({ children, className }: Props) => (
  <ErrorBoundary>
    <div className={cn(styles.root, className)}>{children}</div>
  </ErrorBoundary>
);
