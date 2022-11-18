import { Link } from 'react-router-dom';
import { ReactI18NextChild } from 'react-i18next';

import { langPath } from 'src/utils/langPath';

import styles from './Nav.module.scss';

interface Props {
  children: ReactI18NextChild
  to: string
}

export const Nav = ({to, children}: Props) => {
  let path;
  if (to.indexOf('/') > -1) {
    path = langPath(to);
  } else {
    path = to;
  }
  return (
    <>
      <Link to={path} className={styles.regular}>
        {children}
      </Link>
    </>
  );
};
