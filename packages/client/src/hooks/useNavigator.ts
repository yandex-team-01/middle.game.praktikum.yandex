import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { LocalStorageItems } from 'src/utils/getLocalStorageItem';
import { getLocalStorageItem } from 'src/utils/getLocalStorageItem';

export const useNavigator = () => {
  const navigate = useNavigate();
  const navigator = useCallback(
    (path: string | number) => {
      if (typeof path == 'string') {
        if (path.indexOf('/') > -1) {
          return navigate(
            `/${getLocalStorageItem(LocalStorageItems.Lang)}${path}`
          );
        }
        return navigate(path);
      }
      navigate(path);
    },
    [navigate]
  );
  return navigator;
};
