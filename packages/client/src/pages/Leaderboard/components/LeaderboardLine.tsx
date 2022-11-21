import { ErrorBoundary } from 'src/components/ErrorBoundary';
import styles from './LeaderboardLine.module.scss';

interface ITeam {
  name: string;
  score: number;
  players: string[];
}
interface Props {
  team: ITeam;
  idx: number;
}

export const LeaderboardLine = ({ idx, team }: Props) => {
  const { name, score, players } = team;
  return (
    <ErrorBoundary>
      <div className={styles.leader_line}>
        <span className={styles.leader_line_item}>{name}</span>
        <span className={styles.leader_line_item}>{idx + 1}</span>
        <span className={styles.leader_line_item}>{score}</span>
        <span className={styles.leader_line_item}>{players[0]}, </span>
        <span className={styles.leader_line_item}>{players[1]}</span>
      </div>
    </ErrorBoundary>
  );
};
