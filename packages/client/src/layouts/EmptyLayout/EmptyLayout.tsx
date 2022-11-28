import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { BlankWindow } from 'src/components/BlankWindow';
import styles from './EmptyLayout.module.scss';

type Props = {
  children: JSX.Element;
};

export const EmptyLayout = ({ children }: Props) => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapped}>
      <BlankWindow>
        <div className={styles.inner}>
          {children}
          <Link to="/">{t('goHome')}</Link>
        </div>
      </BlankWindow>
    </div>
  );
};
