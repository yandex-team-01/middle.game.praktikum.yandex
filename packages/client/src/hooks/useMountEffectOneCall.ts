/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

export const useMountEffectOneCall = (
  effectCallback: () => (() => void) | void
) => {
  let isRepeatCall = false;
  let callbackUnmounting: (() => void) | void;

  useEffect(() => {
    if (!isRepeatCall) {
      callbackUnmounting = effectCallback();
    }
    const isProd = getEnvSsr();

    return () => {
      if (
        (isRepeatCall && callbackUnmounting) ||
        (callbackUnmounting && isProd)
      ) {
        callbackUnmounting();
      }

      isRepeatCall = true;
    };
  }, []);
};

const getEnvSsr = () => {
  return import.meta.env.PROD;
};
