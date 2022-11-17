import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './MainMenu.module.scss';

import { Button } from 'src/components/Button';

import { useAppDispatch } from 'src/hooks/redux';
import { fetchLogout } from 'src/store/auth/AuthActions';
import { useNavigator } from 'src/hooks/useNavigator';

export const MainMenu = () => {
  const { t } = useTranslation();
  const navigator = useNavigator();
  const dispath = useAppDispatch();

  const leadersHandle = () => navigator("/leaders")
  const forumHandle = () => navigator("/forum")
  const settingsHandle = () => navigator("/settings")
  const gameLoading = () => navigator("/loadinggame")

  const logoutHandle = useCallback(() => {
    dispath(fetchLogout());
  }, [dispath]);
  
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>
        Huggy Wuggy <br /> & Kissy Missy
      </h1>
      <div className={styles.block_buttons}>
        <Button regular className={styles.button} onClick={gameLoading}>
          {t('play')}
        </Button>
        <Button regular onClick={leadersHandle}>
          {t('leaderboard')}
        </Button>
        <Button regular onClick={forumHandle}>
          {t('forum')}
        </Button>
      </div>
      <div className={styles.buttons}>
        <Button regular onClick={settingsHandle}>
          {t('profile')}
        </Button>
        <Button regular onClick={logoutHandle}>
          {t('logout')}
        </Button>
      </div>
    </div>
  );
};
