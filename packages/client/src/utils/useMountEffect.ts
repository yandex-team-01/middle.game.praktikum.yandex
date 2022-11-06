import { useEffect } from 'react';

/**
 * Вызывает effectCallback при маунте компонента
 */
export const useMountEffect = (effectCallback: () => (() => void) | void) => {
  // тут не должно быть зависимостей
  // eslint-disable-next-line
  useEffect(effectCallback, []);
};
