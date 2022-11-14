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

    return () => {
      if (isRepeatCall && callbackUnmounting) {
        callbackUnmounting();
      }

      isRepeatCall = true;
    };
  }, []);
};
