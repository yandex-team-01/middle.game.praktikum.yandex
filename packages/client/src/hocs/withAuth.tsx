import { useMountEffect } from 'src/hooks/useMountEffect';
import { fetchAuth } from 'src/store/auth/AuthActions';
import { ComponentType } from 'react';
import { useBoundAction } from 'src/hooks/useBoundAction';
import { useAppSelector } from 'src/hooks/redux';
import { selectCheckAuth } from 'src/store/auth/AuthSelectors';
import { BackgroundLayout } from 'src/layouts/BackgroundLayout';
import { Spinner } from 'src/components/Spinner';

export const withAuth = (Component: ComponentType) => {
  return () => {
    const handleFetchAuth = useBoundAction(fetchAuth);
    const checkAuth = useAppSelector(selectCheckAuth);
    useMountEffect(() => {
      handleFetchAuth();
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
