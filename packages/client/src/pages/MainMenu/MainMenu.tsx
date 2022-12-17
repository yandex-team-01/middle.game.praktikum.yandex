import { useTranslation } from 'react-i18next';
import styles from './MainMenu.module.scss';
import { Button } from 'src/components/Button';
import { fetchLogout } from 'src/store/auth/AuthActions';
import { useNavigator } from 'src/hooks/useNavigator';
import { TitleGame } from 'src/components/TitleGame';
import { useBoundAction } from 'src/hooks/useBoundAction';

export const MainMenu = () => {
  const { t } = useTranslation();
  const navigator = useNavigator();

  const leadersHandle = () => navigator('/leaders');
  const forumHandle = () => navigator('/forum');
  const settingsHandle = () => navigator('/settings');
  const gameLoading = () => navigator('/loadinggame');

  const logoutHandle = useBoundAction(fetchLogout);

  return (
    <div className={styles.page}>
      <TitleGame className={styles.title} />
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
