import React from 'react';
import cn from 'classnames';
import styles from './Input.module.scss';
import { Props } from './types';

export const Input = ({
  name,
  type = 'text',
  showError = false,
  error,
  onChange,
  onBlur,
  className = '',
}: Props): JSX.Element => (
  <div className={styles.input_container}>
    <input
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
    />
    {showError && <p className={styles.error}>{error}</p>}
  </div>
);
