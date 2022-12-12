/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { getEnvSsrAndProd } from 'src/utils/getEnvSsrAndProd';

export const useMountEffectOneCall = (
  effectCallback: () => (() => void) | void
) => {
  let isRepeatCall = false;
  let callbackUnmounting: (() => void) | void;

  useEffect(() => {
    if (!isRepeatCall) {
      callbackUnmounting = effectCallback();
    }
    const env = getEnvSsrAndProd();

    return () => {
      if (
        (isRepeatCall && callbackUnmounting) ||
        (callbackUnmounting && env.PROD)
      ) {
        callbackUnmounting();
      }

      isRepeatCall = true;
    };
  }, []);
};
