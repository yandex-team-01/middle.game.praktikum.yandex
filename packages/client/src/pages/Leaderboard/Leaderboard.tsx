import { useTranslation } from 'react-i18next';

import styles from './Leaderboard.module.scss';

import { BlankWindow } from 'src/components/BlankWindow';
import { Button } from 'src/components/Button';
import { LeaderboardLine } from './components/LeaderboardLine';
import { useNavigator } from 'src/hooks/useNavigator';
import { getAllLeaderboard } from 'src/store/leaderboard/LeaderboardActions';
import { BackgroundLayout } from 'src/layouts/BackgroundLayout';
import { Spinner } from 'src/components/Spinner';
import {
  selectLeaderboardRecords,
  selectLoading,
} from 'src/store/leaderboard/LeaderboardSelectors';
import { useAppSelector } from 'src/hooks/redux';
import { leaderboardRequestData } from 'src/constants/LeaderboardConsts';
import { useBoundAction } from 'src/hooks/useBoundAction';
import { Leader } from 'src/store/leaderboard/types';
import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { useMountEffectOneCall } from 'src/hooks/useMountEffectOneCall';
import { SEO } from 'src/components/SEO';

export const Leaderboard = () => {
  const { t } = useTranslation();
  const navigator = useNavigator();

  const handleBack = () => navigator(-1);
  const handleLoadGame = () => navigator('/loadinggame');
  const isLoading = useAppSelector(selectLoading);
  const leaderboard = useAppSelector(selectLeaderboardRecords);

  const handleGetLeaderboard = useBoundAction(getAllLeaderboard);
  useMountEffectOneCall(() => {
    handleGetLeaderboard(leaderboardRequestData);
  });

  if (isLoading) {
    return (
      <BackgroundLayout>
        <Spinner />
      </BackgroundLayout>
    );
  }

  return (
    <ErrorBoundary>
      <div className={styles.block}>
        <SEO title={t('title.leaderboard')} />
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
            <div className={styles.table}>
              <div className={styles.header_item}>#</div>
              <div className={styles.header_item}>{t('Name')}</div>
              <div className={styles.header_item}>{t('Score')}</div>

              {leaderboard.map((leader: Leader, idx) => {
                return (
                  <LeaderboardLine leader={leader.data} idx={idx} key={idx} />
                );
              })}
            </div>
          </div>
        </BlankWindow>
      </div>
    </ErrorBoundary>
  );
};