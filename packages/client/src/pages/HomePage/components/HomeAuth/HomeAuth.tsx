import styles from '../../HomePage.module.scss';
import { Button } from 'src/components/Button';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'src/hooks/redux';
import { fetchLogout } from 'src/store/auth/AuthActions';
import { useCallback } from 'react';

export const HomeAuth = () => {
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

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>
        Huggy Wuggy <br /> & Kissy Missy
      </h1>
      <div className={styles.block_buttons}>
        <Button regular>Play</Button>
        <Button regular onClick={leadersHandle}>
          Leaderboard
        </Button>
        <Button regular onClick={forumHandle}>
          Forum
        </Button>
      </div>
      <div className={styles.buttons}>
        <Button regular onClick={settingsHandle}>
          Profile
        </Button>
        <Button regular onClick={logoutHandle}>
          Logout
        </Button>
      </div>
    </div>
  );
};
