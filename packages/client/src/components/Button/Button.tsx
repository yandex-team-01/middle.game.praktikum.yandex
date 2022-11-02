import React from 'react';
import cn from 'classnames';
import { Props } from './types';
import styles from './button.module.scss';

export const Button = ({
  children,
  type = 'button',
  className = '',
  regular = false,
  onClick,
}: Props): JSX.Element => (
  <button
    className={cn(styles.button, { [styles.regular]: regular }, className)}
    onClick={onClick}
    type={type}>
    {children}
  </button>
);
