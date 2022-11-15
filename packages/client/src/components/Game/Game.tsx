import { useCallback, useRef } from 'react';
import { Game } from 'src/logic/Game/Game';
import { useMountEffectOneCall } from 'src/hooks/useMountEffectOneCall';
import { Button } from 'src/components/Button';
import { useNavigate } from 'react-router-dom';
import styles from 'src/pages/GameScreen/GameScreen.module.scss';
import { ErrorBoundary } from '../ErrorBoundary';

export const GameComponent = () => {
  const navigate = useNavigate();

  const handleBack = useCallback(() => {
    navigate('/');
  }, [navigate]);
  const handleEndGame = useCallback(() => {
    game.current?.end();
  }, []);

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
          <Button regular onClick={handleBack}>
            GO BACK
          </Button>
          <Button regular onClick={handleEndGame}>
            END THE GAME
          </Button>
        </div>
        <canvas id="game-canvas" ref={canvas} />
      </div>
    </ErrorBoundary>
  );
};
