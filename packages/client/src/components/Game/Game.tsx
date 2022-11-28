import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Game } from 'src/logic/Game';
import { useMountEffectOneCall } from 'src/hooks/useMountEffectOneCall';
import { useFullScreen } from 'src/hooks/useFullScreen';
import { Button } from 'src/components/Button';
import styles from 'src/pages/GameScreen/GameScreen.module.scss';
import { ErrorBoundary } from '../ErrorBoundary';
import { useNavigator } from 'src/hooks/useNavigator';

export const GameComponent = () => {
  const { t } = useTranslation();
  const navigator = useNavigator();

  const handleBack = () => navigator('/');
  const [isFullScreen, toggleIsFullScreen] = useFullScreen();

  const canvas = useRef<HTMLCanvasElement>(null); //https://stackoverflow.com/a/63119934
  const game = useRef<Game | null>(null);

  useMountEffectOneCall(() => {
    game.current = new Game(canvas.current as HTMLCanvasElement);
    game.current.init(() => {
      console.log('Игра загружена');
    });

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
