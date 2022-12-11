import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { SCORE_FIELD_NAME } from 'src/constants/LeaderboardConsts';
import styles from './LeaderboardLine.module.scss';

export interface ILeader {
  user: string;
  [SCORE_FIELD_NAME]: number;
}
interface Props {
  leader: ILeader;
  idx: number;
}

export const LeaderboardLine = ({ idx, leader }: Props) => {
  const { user } = leader;
  const score = leader[SCORE_FIELD_NAME];
  return (
    <ErrorBoundary>
      <div className={styles.leader_line_item}>{idx + 1}</div>
      <div className={styles.leader_line_item}>{user}</div>
      <div className={styles.leader_line_item}>{score}</div>
    </ErrorBoundary>
  );
};
