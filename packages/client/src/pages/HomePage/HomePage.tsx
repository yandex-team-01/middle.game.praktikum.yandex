import { BackgroundLayout } from 'src/layouts/BackgroundLayout';
import { HomeNotAuth } from './components/HomeNotAuth';
import { HomeAuth } from './components/HomeAuth';
import { useAppSelector } from 'src/hooks/redux';

export const HomePage = () => {
  const auth = useAppSelector(state => state.auth.auth);
  return (
    <BackgroundLayout>{auth ? <HomeAuth /> : <HomeNotAuth />}</BackgroundLayout>
  );
};
