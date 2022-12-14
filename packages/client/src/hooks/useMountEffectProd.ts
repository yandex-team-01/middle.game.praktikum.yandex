import { useEffect } from 'react';

export const useMountEffectProd = (
  effectCallback: () => (() => void) | void
) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(effectCallback, []);
};
