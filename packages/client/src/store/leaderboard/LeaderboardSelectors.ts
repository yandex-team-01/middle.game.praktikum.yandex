import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const selectLoading = createSelector(
  (state: RootState) => state.leaderboard,
  leaderboard => leaderboard.isLoading
);

export const selectLeaderboard = createSelector(
  (state: RootState) => state.leaderboard,
  leaderboard => leaderboard.leaderboard
);
