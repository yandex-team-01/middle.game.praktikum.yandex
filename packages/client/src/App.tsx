import { BackgroundLayout } from './layouts/BackgroundLayout';
import { useAppDispatch, useAppSelector } from './hooks/redux';

import { fetchAuth } from './store/auth/AuthActions';
import { Spinner } from './components/Spinner';
import { ErrorsNotification } from './components/ErrorsNotification';
import { Routing } from './components/Routing';
import { useMountEffect } from './hooks/useMountEffect';
import { selectCheckAuth } from './store/auth/AuthSelectors';

export const App = () => {
  const dispath = useAppDispatch();

  const checkAuth = useAppSelector(selectCheckAuth);

  useMountEffect(() => {
    dispath(fetchAuth());
  });

  if (!checkAuth) {
    return (
      <BackgroundLayout>
        <Spinner />
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
