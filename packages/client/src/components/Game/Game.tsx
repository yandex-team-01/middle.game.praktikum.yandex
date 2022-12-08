import { useCallback, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Game } from 'src/logic/Game';
import { useMountEffectOneCall } from 'src/hooks/useMountEffectOneCall';
import { useFullScreen } from 'src/hooks/useFullScreen';
import { Button } from 'src/components/Button';
import styles from 'src/pages/GameScreen/GameScreen.module.scss';
import { ErrorBoundary } from '../ErrorBoundary';
import { useNavigator } from 'src/hooks/useNavigator';
import { recordScore } from 'src/store/leaderboard/LeaderboardActions';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { selectUser } from 'src/store/auth/AuthSelectors';
import { SCORE_FIELD_NAME, TEAM_NAME } from 'src/constants/LeaderboardConsts';

export const GameComponent = () => {
  const { t } = useTranslation();
  const navigator = useNavigator();
  const dispatch = useAppDispatch();

  const handleBack = () => navigator('/');
  const [isFullScreen, toggleIsFullScreen] = useFullScreen();

  const user = useAppSelector(selectUser);

  const onEndGame = useCallback(
    (score: number) => {
      dispatch(
        recordScore({
          data: { [SCORE_FIELD_NAME]: score, user: user.login },
          teamName: TEAM_NAME,
          ratingFieldName: SCORE_FIELD_NAME,
        })
      );
    },
    [dispatch, user]
  );

  const canvas = useRef<HTMLCanvasElement>(null); //https://stackoverflow.com/a/63119934
  const game = useRef<Game | null>(null);

  useMountEffectOneCall(() => {
    game.current = new Game(canvas.current as HTMLCanvasElement);
    game.current.init(() => {
      console.log('Игра загружена');
    }, onEndGame);

    return () => {
      game.current?.destruct();
    };
  });

  return (
    <ErrorBoundary>
      <div>
        <div className={styles.block_button}>
          <Button regular className="button" onClick={handleBack}>
            {t('goBack')}
          </Button>
          <Button
            regular
            className="button"
            onClick={() => toggleIsFullScreen()}>
            {isFullScreen ? '╬' : '⛶'}
          </Button>
        </div>
        <canvas id="game-canvas" ref={canvas} />
      </div>
    </ErrorBoundary>
  );
};
