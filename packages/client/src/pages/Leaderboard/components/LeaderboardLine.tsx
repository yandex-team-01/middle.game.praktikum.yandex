import { ErrorBoundary } from 'src/components/ErrorBoundary';
import styles from './LeaderboardLine.module.scss';

export interface ILeader {
  user: string;
  huggywuggyscore: number;
}
interface Props {
  leader: ILeader;
  idx: number;
}

export const LeaderboardLine = ({ idx, leader }: Props) => {
  const { user, huggywuggyscore } = leader;
  return (
    <ErrorBoundary>
      <tr className={styles.leader_line}>
        <td className={styles.leader_line_item}>{idx + 1}</td>
        <td className={styles.leader_line_item}>{user}</td>
        <td className={styles.leader_line_item}>{huggywuggyscore}</td>
      </tr>
    </ErrorBoundary>
  );
};
