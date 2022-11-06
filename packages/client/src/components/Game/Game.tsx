import {useRef} from 'react';
import {Game} from '../../logic/Game/Game';
import {useMountEffect} from '../../hooks/useMountEffect';
import { Button } from '../Button';
import { useNavigate } from 'react-router-dom';
import styles from '../../pages/Forum/forum.module.scss';

export const GameComponent = () => {

  const navigate = useNavigate();
  const canvas = useRef<HTMLCanvasElement>(null);//https://stackoverflow.com/a/63119934
  const game = useRef<Game | null>(null);

  useMountEffect (() => { 
    game.current = new Game(canvas.current as HTMLCanvasElement);
    game.current.start();

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
