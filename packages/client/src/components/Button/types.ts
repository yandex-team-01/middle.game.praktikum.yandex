import { ReactNode } from 'react';

export interface Props {
  onClick: () => void;
  className?: string;
  regular?: boolean;
  color?: string;
  type?: 'button' | 'submit' | 'reset';
  children: ReactNode;
  disabled?: boolean;
}
