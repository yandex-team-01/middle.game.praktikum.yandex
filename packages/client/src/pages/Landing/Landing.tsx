import { Trans, useTranslation } from 'react-i18next';

import styles from './Landing.module.scss';

import { Button } from 'src/components/Button';

import gameImg from 'src/assets/images/game.png';
import { useNavigator } from 'src/hooks/useNavigator';
import { TitleGame } from 'src/components/TitleGame';

export const Landing = () => {
  const { t } = useTranslation();
  const navigator = useNavigator();

  const navigateLogin = () => navigator('auth');
  const navigateSignup = () => navigator('/auth/reg');

  return (
    <div className={styles.page}>
      <TitleGame className={styles.title} />
      <div className={styles.block}>
        <div>
          <h2 className={styles.subtitle}>{t('howToPlay')}</h2>
          <p className={styles.text}>
            <Trans i18nKey="homeDescription" />
          </p>
        </div>
        <img src={gameImg} alt="game screen" className={styles.img} />
      </div>
      <div className={styles.buttons}>
        <Button
          regular
          type="submit"
          className={styles.button}
          onClick={navigateLogin}>
          {t('signIn')}
        </Button>
        <Button
          regular
          type="submit"
          className={styles.button}
          onClick={navigateSignup}>
          {t('signUp')}
        </Button>
      </div>
    </div>
  );
};
