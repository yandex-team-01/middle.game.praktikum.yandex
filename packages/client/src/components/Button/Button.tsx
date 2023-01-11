import cn from 'classnames';
import { Props } from './types';
import styles from './button.module.scss';
import { ErrorBoundary } from '../ErrorBoundary';
import { ThemeContext } from '../../utils/theme/ThemeContext';

export const Button = ({
  children,
  type = 'button',
  regular = false,
  disabled = false,
  className = '',
  onClick,
}: Props) => (
  <ErrorBoundary>
    <ThemeContext.Consumer>
      {theme => (
        <button
          className={cn(
            styles.button,
            { [styles.regular]: regular },
            className
          )}
          onClick={onClick}
          type={type}
          disabled={disabled}
          style={{ backgroundColor: theme.background }}>
          {children}
        </button>
      )}
    </ThemeContext.Consumer>
  </ErrorBoundary>
);
