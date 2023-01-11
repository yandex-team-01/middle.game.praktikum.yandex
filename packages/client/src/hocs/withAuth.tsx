import { useMountEffect } from 'src/hooks/useMountEffect';
import { fetchAuth } from 'src/store/auth/AuthActions';
import { ComponentType } from 'react';
import { useBoundAction } from 'src/hooks/useBoundAction';

export const withAuth = (Component: ComponentType) => {
  return () => {
    const handleFetchAuth = useBoundAction(fetchAuth);
    useMountEffect(() => {
      handleFetchAuth();
    });

    return <Component />;
  };
};
