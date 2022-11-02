import { Link } from 'react-router-dom';

import { BlankWindow } from '../../components/BlankWindow';
import styles from './EmptyLayout.module.scss';

type Props = {
  children: JSX.Element;
};

export const EmptyLayout = ({ children }: Props) => {
  return (
    <div className={styles.wrapped}>
      <BlankWindow>
        <div className={styles.inner}>
          {children}
          <Link to="/">перейти на главную</Link>
        </div>
      </BlankWindow>
    </div>
  );
};
