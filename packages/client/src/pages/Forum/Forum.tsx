import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';

import styles from './Forum.module.scss';

import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { Button } from 'src/components/Button';

import { useNavigator } from 'src/hooks/useNavigator';

export const Forum = () => {
  const { t } = useTranslation();
  const navigator = useNavigator();

  const handlerBack = () => navigator(-1);
  const handlerLoadGame = () => navigator('/loadinggame');

  return (
    <ErrorBoundary>
      <div className={styles.forum}>
        <div className={styles.block_button}>
          <Button regular onClick={handlerBack}>
            {t('goBack')}
          </Button>
          <Button regular onClick={handlerLoadGame}>
            {t('play')}
          </Button>
        </div>
        <Outlet />
      </div>
    </ErrorBoundary>
  );
};
