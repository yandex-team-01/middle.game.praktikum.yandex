import './GameScreen.module.scss';

import { GameComponent } from '../../components/Game';
import { BackgroundLayout } from 'src/layouts/BackgroundLayout';

export const GameScreen = () => {
  return (
    <BackgroundLayout>
      <GameComponent />
    </BackgroundLayout>
  );
};
