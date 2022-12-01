import { Link } from 'react-router-dom';
import { ReactI18NextChild } from 'react-i18next';

import { langPath } from 'src/utils/langPath';

import styles from './Nav.module.scss';

interface Props {
  children: ReactI18NextChild;
  to: string;
}
const getPath = (to: string) => (to.indexOf('/') > -1 ? langPath(to) : to);

export const Nav = ({ to, children }: Props) => {
  return (
    <Link to={getPath(to)} className={styles.regular}>
      {children}
    </Link>
  );
};
