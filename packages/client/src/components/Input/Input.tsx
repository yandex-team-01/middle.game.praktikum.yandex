import cn from 'classnames';
import styles from './Input.module.scss';
import { Props } from './types';
import { ErrorBoundary } from '../ErrorBoundary';

export const Input = ({
  name,
  type = 'text',
  showError = false,
  error,
  onChange,
  onBlur,
  className = '',
  label,
  placeholder = '',
  value,
}: Props) => (
  <ErrorBoundary>
    <div className={styles.input_container}>
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        type={type}
        className={cn(
          styles.input,
          styles[className],
          className,
          showError && styles.input_error
        )}
        placeholder={placeholder}
        value={value}
      />
      {showError && <p className={styles.error}>{error}</p>}
    </div>
  </ErrorBoundary>
);
