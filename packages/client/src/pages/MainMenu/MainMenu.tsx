import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './MainMenu.module.scss';

import { Button } from 'src/components/Button';

import { useAppDispatch } from 'src/hooks/redux';
import { fetchLogout } from 'src/store/auth/AuthActions';

export const MainMenu = () => {
  const { t } = useTranslation();
  const dispath = useAppDispatch();
  const navigate = useNavigate();

  const leadersHandle = useCallback(() => {
    navigate('/leaders');
  }, [navigate]);

  const forumHandle = useCallback(() => {
    navigate('/forum');
  }, [navigate]);

  const settingsHandle = useCallback(() => {
    navigate('/settings');
  }, [navigate]);

  const logoutHandle = useCallback(() => {
    dispath(fetchLogout());
  }, [dispath]);

  const gameLoading = useCallback(() => {
    navigate('/loadinggame');
  }, [navigate]);

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
