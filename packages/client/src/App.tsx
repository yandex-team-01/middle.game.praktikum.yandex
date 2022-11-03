import { BackgroundLayout } from './layouts/BackgroundLayout';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchAuth } from './store/auth/AuthActions';
import { Preloader } from './components/Preloader';
import { ErrorsNotification } from './components/ErrorsNotification';
import { Routing } from './components/Routing';
import { useMountEffect } from './hooks/useMountEffect';
import { RootState } from './store/store';

export const App = () => {
  const dispath = useAppDispatch();
  const checkAuth = useAppSelector((state: RootState) => state.auth.checkAuth);

  useMountEffect(() => {
    dispath(fetchAuth());
  });

  if (!checkAuth) {
    return (
      <BackgroundLayout>
        <Preloader />
      </BackgroundLayout>
    );
  }

  return (
    <>
      <ErrorsNotification />
      <Routing />
    </>
  );
};
