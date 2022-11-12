import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import styles from './Leaderboard.module.scss';

import { BlankWindow } from 'src/components/BlankWindow';
import { Button } from 'src/components/Button';
import { LeaderboardLine } from './components/LeaderboardLine';
import { ErrorBoundary } from 'src/components/ErrorBoundary';

const LeadersMockData = [
  {
    name: 'Team 1',
    score: 12345,
    players: ['player 1', 'player 2'],
  },
  {
    name: 'Team 3',
    score: 1000,
    players: ['player 6', 'player 10'],
  },
  {
    name: 'Team 5',
    score: 933,
    players: ['player 33', 'player 24'],
  },
  {
    name: 'Team 6',
    score: 600,
    players: ['player 122', 'player 442'],
  },
];

export const Leaderboard = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleBack = useCallback(() => {
    navigate('/');
  }, [navigate]);

  const handleLoadGame = useCallback(() => {
    navigate('/loadinggame');
  }, [navigate]);

  return (
    <div className={styles.block}>
      <div className={styles.button_wrapper}>
        <Button regular onClick={handleBack}>
          {t('goBack')}
        </Button>
        <Button regular onClick={handleLoadGame}>
          {t('play')}
        </Button>
      </div>
      <BlankWindow className={styles.window}>
        <div className={styles.background_overlay}>
          <h1 className={styles.header}>{t('topTeams')}</h1>
          {LeadersMockData.map((team, idx) => {
            return <LeaderboardLine team={team} idx={idx} key={idx} />;
          })}
        </div>
      </BlankWindow>
    </div>
  );
};
