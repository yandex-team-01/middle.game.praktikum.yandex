import { useCallback, useRef } from 'react';
import { Game } from '../../logic/Game/Game';
import { useMountEffectOneCall } from 'src/hooks/useMountEffectOneCall';
import { Button } from '../Button';
import { useNavigate } from 'react-router-dom';
import styles from '../../pages/GameScreen/GameScreen.module.scss';

export const GameComponent = () => {
  const navigate = useNavigate();
  const handlerBack = useCallback(() => {
    navigate('/');
  }, [navigate]);
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
    <div>
      <div className={styles.block_button}>
        <Button regular onClick={handlerBack}>
          GO BACK
        </Button>
        <Button
          regular
          onClick={() => {
            game.current?.end();
          }}>
          END THE GAME
        </Button>
      </div>
      <canvas id="game-canvas" ref={canvas} />
    </div>
  );
};
