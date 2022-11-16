import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet, useNavigate } from 'react-router-dom';

import styles from './Forum.module.scss';

import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { Button } from 'src/components/Button';

export const Forum = () => {
  const { t } = useTranslation();
  let lang = localStorage.getItem('i18nextLng');
  const navigate = useNavigate();

  const handlerBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const handlerLoadGame = useCallback(() => {
    navigate(`/${lang}/loadinggame`);
  }, [navigate]);

  return (
    <ErrorBoundary>
      <div className={styles.forum}>
        <div className={styles.block_button}>
          <Button regular onClick={handlerBack}>{t('goBack')}</Button>
          <Button regular onClick={handlerLoadGame}>{t('play')}</Button>
        </div>
        <Outlet />
      </div>
    </ErrorBoundary>
  );
};
