import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { selectCheckAuth } from 'src/store/auth/AuthSelectors';
import { useMountEffectOneCall } from '../hooks/useMountEffectOneCall';
import { fetchAuth } from 'src/store/auth/AuthActions';
import { BackgroundLayout } from 'src/layouts/BackgroundLayout';
import { Spinner } from 'src/components/Spinner';
import { ComponentType } from 'react';

export const withAuth = (Component: ComponentType) => {
  return () => {
    const dispath = useAppDispatch();
    const checkAuth = useAppSelector(selectCheckAuth);

    useMountEffectOneCall(() => {
      dispath(fetchAuth());
    });

    if (!checkAuth) {
      return (
        <BackgroundLayout>
          <Spinner />
        </BackgroundLayout>
      );
    }
    return <Component />;
  };
};
