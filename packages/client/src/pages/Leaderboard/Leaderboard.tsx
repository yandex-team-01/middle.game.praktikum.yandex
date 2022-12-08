import { useTranslation } from 'react-i18next';

import styles from './Leaderboard.module.scss';

import { BlankWindow } from 'src/components/BlankWindow';
import { Button } from 'src/components/Button';
import { ILeader, LeaderboardLine } from './components/LeaderboardLine';
import { useNavigator } from 'src/hooks/useNavigator';
import { useMountEffect } from 'src/hooks/useMountEffect';
import { getAllLeaderboard } from 'src/store/leaderboard/LeaderboardActions';
import { BackgroundLayout } from 'src/layouts/BackgroundLayout';
import { Spinner } from 'src/components/Spinner';
import {
  selectLeaderboard,
  selectLoading,
} from 'src/store/leaderboard/LeaderboardSelectors';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';

export const Leaderboard = () => {
  const { t } = useTranslation();
  const navigator = useNavigator();

  const handleBack = () => navigator(-1);
  const handleLoadGame = () => navigator('/loadinggame');
  const isLoading = useAppSelector(selectLoading);
  const leaderboard = useAppSelector(selectLeaderboard);
  const dispatch = useAppDispatch();

  const requestData = {
    teamName: 'team-01',
    ratingFieldName: 'huggywuggyscore',
    cursor: 0,
    limit: 1000,
  };

  useMountEffect(() => {
    dispatch(getAllLeaderboard(requestData));
  });

  if (isLoading) {
    return (
      <BackgroundLayout>
        <Spinner />
      </BackgroundLayout>
    );
  }

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
          <table className={styles.table}>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Score</th>
            </tr>
            {leaderboard.map((leader: { data: ILeader }, idx) => {
              return (
                <LeaderboardLine leader={leader.data} idx={idx} key={idx} />
              );
            })}
          </table>
        </div>
      </BlankWindow>
    </div>
  );
};
