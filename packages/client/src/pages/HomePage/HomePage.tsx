import { HomeNotAuth } from './components/HomeNotAuth';
import { HomeAuth } from './components/HomeAuth';
import { useAppSelector } from 'src/hooks/redux';

export const HomePage = () => {
  const auth = useAppSelector(state => state.auth.auth);
  return <div>{auth ? <HomeAuth /> : <HomeNotAuth />}</div>;
};
