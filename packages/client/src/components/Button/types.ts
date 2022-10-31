export interface Props {
  onClick?: () => void;
  className?: string;
  regular?: boolean;
  color?: string;
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  disabled?: boolean;
}
