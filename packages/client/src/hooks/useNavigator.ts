import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const useNavigator = () => {
  const navigate = useNavigate();
  const navigator = useCallback(
    (path: string | number) => {
      if (typeof path == 'string') {
        return navigate(path);
      }
      navigate(path);
    },
    [navigate]
  );
  return navigator;
};
