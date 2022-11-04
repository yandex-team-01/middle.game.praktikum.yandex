import {useRef} from 'react';
import {Game} from '../../logic/Game/Game';
import {useMountEffect} from '../../utils/useMountEffect';



export const GameComponent = () => {

  const canvas = useRef<HTMLCanvasElement>(null);//https://stackoverflow.com/a/63119934
  const game = useRef<Game | null>(null);

  useMountEffect (() => { 
    game.current = new Game(canvas.current as HTMLCanvasElement);
    game.current!.StartAnimating(10);
    
    const updater = function() {
      game.current!.animate();
      requestAnimationFrame( updater );  // for subsequent frames
    };
  
    requestAnimationFrame( updater );  // for the first frame https://stackoverflow.com/a/44975010
  });

  return (
    <div>
      <canvas id='game-canvas' ref={canvas} />
      
    </div>

  );
}







