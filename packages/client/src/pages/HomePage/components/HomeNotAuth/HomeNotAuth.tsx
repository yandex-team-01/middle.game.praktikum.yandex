import styles from '../../HomePage.module.scss';
import { Button } from 'src/components/Button';
import gameImg from 'src/assets/images/game.png';
import { useNavigate } from 'react-router-dom';

export const HomeNotAuth = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>
        Huggy Wuggy <br /> & Kissy Missy
      </h1>
      <div className={styles.block}>
        <div>
          <h2 className={styles.subtitle}>HOW to PLAY</h2>
          <p className={styles.text}>
            The main goal of the game is to find the key and collect diamonds.
            With the key, you can open the door that will take you to the next
            level. This game can be played either alone or for two with a
            friend.
          </p>
        </div>
        <img src={gameImg} alt="game screen" className={styles.img} />
      </div>
      <div className={styles.buttons}>
        <Button
          regular
          type="submit"
          className={styles.button}
          onClick={() => {
            navigate('/login');
          }}>
          Sign in
        </Button>
        <Button
          regular
          type="submit"
          className={styles.button}
          onClick={() => {
            navigate('/reg');
          }}>
          Sign Up
        </Button>
      </div>
    </div>
  );
};
