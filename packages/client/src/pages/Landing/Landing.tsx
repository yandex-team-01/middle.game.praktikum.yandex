import { useNavigate } from 'react-router-dom';
import { Trans, useTranslation } from 'react-i18next';

import styles from './Landing.module.scss';

import { Button } from 'src/components/Button';

import gameImg from 'src/assets/images/game.png';
import { useCallback } from 'react';

export const Landing = () => {
  const { t } = useTranslation();
  let lang = localStorage.getItem('i18nextLng');
  const navigate = useNavigate();

  const navigateLogin = useCallback(() => {
    navigate(`/${lang}/login`);
  }, [navigate]);

  const navigateSignup = useCallback(() => {
    navigate(`/${lang}/reg`);
  }, [navigate]);

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>
        Huggy Wuggy <br /> & Kissy Missy
      </h1>
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
