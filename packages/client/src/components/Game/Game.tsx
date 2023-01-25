import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Game } from 'src/logic/Game';
import { useMountEffectOneCall } from 'src/hooks/useMountEffectOneCall';
import { useFullScreen } from 'src/hooks/useFullScreen';
import { Button } from 'src/components/Button';
import styles from 'src/pages/GameScreen/GameScreen.module.scss';
import { ErrorBoundary } from '../ErrorBoundary';
import { useNavigator } from 'src/hooks/useNavigator';
import { recordScore } from 'src/store/leaderboard/LeaderboardActions';
import { useBoundAction } from 'src/hooks/useBoundAction';
import { pointerLockAPI } from 'src/hooks/pointerLockAPI';
import IconFullScreenOpen from 'src/assets/icons/fullscreen-open.svg';
import IconFullScreenClose from 'src/assets/icons/fullscreen-close.svg';

export const GameComponent = () => {
  const { t } = useTranslation();
  const navigator = useNavigator();

  const handleBack = () => navigator('/');
  const [isFullScreen, toggleIsFullScreen] = useFullScreen();

  const onEndGame = useBoundAction((score: number) => recordScore(score));

  const canvas = useRef<HTMLCanvasElement>(null); //https://stackoverflow.com/a/63119934
  const game = useRef<Game | null>(null);

  useMountEffectOneCall(() => {
    pointerLockAPI(canvas.current);
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
            <img
              src={isFullScreen ? IconFullScreenClose : IconFullScreenOpen}
            />
          </Button>
        </div>
        <canvas id="game-canvas" ref={canvas} />
      </div>
    </ErrorBoundary>
  );
};
