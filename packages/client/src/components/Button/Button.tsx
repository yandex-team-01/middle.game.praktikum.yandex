import cn from 'classnames';
import { Props } from './types';
import styles from './button.module.scss';
import { ErrorBoundary } from '../ErrorBoundary';
import { ThemeContext, themes } from '../../utils/theme/ThemeContext';

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
            { [styles.light]: theme === themes.dark },
            { [styles.dark]: theme === themes.light },
            { [styles.regular]: regular },
            className
          )}
          onClick={onClick}
          type={type}
          disabled={disabled}>
          {children}
        </button>
      )}
    </ThemeContext.Consumer>
  </ErrorBoundary>
);
