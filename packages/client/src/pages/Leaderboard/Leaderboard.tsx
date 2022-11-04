import { useNavigate } from 'react-router-dom';

import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { BlankWindow } from 'src/components/BlankWindow';

import { Button } from 'src/components/Button';
import { LeaderboardLine } from './components/LeaderboardLine';
import styles from './Leaderboard.module.scss';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const backHandle = () => {
    navigate(-1);
  };
  const gameHandle = () => {
    navigate('/loading');
  };
  return (
    <ErrorBoundary>
      <div className={styles.block}>
        <div className={styles.button_wrapper}>
          <Button regular onClick={backHandle}>
            Go back
          </Button>
          <Button regular onClick={gameHandle}>
            Play
          </Button>
        </div>
        <BlankWindow className={styles.window}>
          <div className={styles.background_overlay}>
            <h1 className={styles.header}>Top teams</h1>
            {LeadersMockData.map((team, idx) => {
              return <LeaderboardLine team={team} idx={idx} key={idx} />;
            })}
          </div>
        </BlankWindow>
      </div>
    </ErrorBoundary>
  );
};
