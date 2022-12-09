import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

export type UseBoundAction = {
  // eslint-disable-next-line
  <I extends any[], R extends any>(actionCreator: (...args: I) => R): (
    ...args: I
  ) => R;
};

/**
 * Wrap actionCreator to dispatch
 */
export const useBoundAction: UseBoundAction = (
  // eslint-disable-next-line
  actionCreator: (...args: any[]) => any
) => {
  const dispatch = useDispatch();

  // eslint-disable-next-line no-undef
  return useCallback(
    (...arg) => dispatch(actionCreator(...arg)),
    [dispatch, actionCreator]
  );
};
