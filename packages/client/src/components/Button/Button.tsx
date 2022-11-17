import cn from 'classnames';
import { Props } from './types';
import styles from './button.module.scss';
import { ErrorBoundary } from '../ErrorBoundary';

export const Button = ({
  children,
  type = 'button',
  regular = false,
  disabled = false,
  className = '',
  onClick,
}: Props) => (
  <ErrorBoundary>
    <button
      className={cn(styles.button, { [styles.regular]: regular }, className)}
      onClick={onClick}
      type={type}
      disabled={disabled}>
      {children}
    </button>
  </ErrorBoundary>
);
