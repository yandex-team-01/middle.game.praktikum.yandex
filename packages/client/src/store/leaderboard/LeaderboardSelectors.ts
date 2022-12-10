import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const selectLeaderboardState = (state: RootState) => state.leaderboard;

export const selectLeaderboardRecords = createSelector(
  selectLeaderboardState,
  leaderboard => leaderboard.leaderboard
);

export const selectLoading = createSelector(
  selectLeaderboardState,
  leaderboard => leaderboard.isLoading
);
