import styles from '../../HomePage.module.scss';
import { Button } from 'src/components/Button';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'src/hooks/redux';
import { fetchLogout } from 'src/store/auth/AuthActions';
import { useCallback } from 'react';

export const HomeAuth = () => {
  const dispath = useAppDispatch();
  const navigate = useNavigate();

  const logout = useCallback(() => {
    dispath(fetchLogout());
  }, [dispath]);

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>
        Huggy Wuggy <br /> & Kissy Missy
      </h1>
      <div className={styles.block_buttons}>
        <Button regular className={styles.button}>
          Play
        </Button>
        <Button
          regular
          className={styles.button}
          onClick={() => {
            navigate('/leaders');
          }}>
          Leaderboard
        </Button>
        <Button
          regular
          className={styles.button}
          onClick={() => {
            navigate('/forum');
          }}>
          FORUM
        </Button>
      </div>
      <div className={styles.buttons}>
        <Button regular className={styles.button}>
          PROFILE
        </Button>
        <Button regular className={styles.button} onClick={logout}>
          LOGOUT
        </Button>
      </div>
    </div>
  );
};
