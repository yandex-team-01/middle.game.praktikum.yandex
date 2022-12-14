// Временно убрала логику с langPath
// навигация с добавление языка в url

import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { langPath } from 'src/utils/langPath';

export const useNavigatorLang = () => {
  const navigate = useNavigate();
  const navigator = useCallback(
    (path: string | number) => {
      if (typeof path == 'string') {
        if (path.indexOf('/') > -1) {
          return navigate(langPath(path));
        }
        return navigate(path);
      }
      navigate(path);
    },
    [navigate]
  );
  return navigator;
};
