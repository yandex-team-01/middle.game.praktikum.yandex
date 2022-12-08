import { useAppDispatch } from '../hooks/redux';
import { useMountEffect } from '../hooks/useMountEffect';
import { fetchAuth } from 'src/store/auth/AuthActions';
import { ComponentType } from 'react';

export const withAuth = (Component: ComponentType) => {
  return () => {
    const dispatch = useAppDispatch();

    useMountEffect(() => {
      dispatch(fetchAuth());
    });

    return <Component />;
  };
};
