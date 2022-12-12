import { Link } from 'react-router-dom';
import { ReactI18NextChild } from 'react-i18next';

import styles from './Nav.module.scss';

interface Props {
  children: ReactI18NextChild;
  to: string;
}
export const Nav = ({ to, children }: Props) => {
  return (
    <Link to={to} className={styles.regular}>
      {children}
    </Link>
  );
};
