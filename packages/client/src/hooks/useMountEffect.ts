import { useEffect } from 'react';

export const useMountEffect = (effectCallback: () => (() => void) | void) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(effectCallback, []);
};
