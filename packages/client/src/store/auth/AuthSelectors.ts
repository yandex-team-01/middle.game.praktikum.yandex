import { IUser } from 'src/modules/IUser';
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const selectCheckAuth = createSelector(
  (state: RootState) => state.auth,
  auth => auth.checkAuth
);

export const selectAuth = createSelector(
  (state: RootState) => state.auth,
  auth => auth.auth
);

export const selectUserLogin = createSelector(
  (state: RootState) => state.auth,
  auth => auth.user?.login
);

export const selectLoading = createSelector(
  (state: RootState) => state.auth,
  auth => auth.loading
);

  export const selectUser = createSelector(
    (state: RootState) => state.auth,
    auth => auth.user as IUser
  );
