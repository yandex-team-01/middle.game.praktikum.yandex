import { useRef } from 'react';
import { Game } from 'src/logic/Game/Game';
import { useMountEffect } from 'src/utils/useMountEffect';

export const GameComponent = () => {
  const canvas = useRef<HTMLCanvasElement>(null); //https://stackoverflow.com/a/63119934
  const game = useRef<Game | null>(null);

  useMountEffect(() => {
    game.current = new Game(canvas.current as HTMLCanvasElement);
    const gameRef = game.current;
    game.current.start(gameRef);

    return () => game.current?.destruct();
  });

  return (
    <div>         
      <div className={styles.block_buttons_top}>
        <Button onClick={() => {
              navigate('/');
            }}>GO BACK</Button>
        <Button regular className={styles.button} onClick={() => {
            game.current?.end();
          } } >END THE GAME</Button>
      </div>   
      <canvas id='game-canvas' ref={canvas} />

    </div>
  );
};
