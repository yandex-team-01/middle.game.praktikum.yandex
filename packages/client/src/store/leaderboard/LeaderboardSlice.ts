import { createSlice } from '@reduxjs/toolkit';

import { getAllLeaderboard } from './LeaderboardActions';
import { ILeaderBoardState } from './types';

const initialState: ILeaderBoardState = {
  leaderboard: [],
  isLoading: false,
};

export const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAllLeaderboard.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getAllLeaderboard.fulfilled, (state, action) => {
      state.leaderboard = action.payload;
      state.isLoading = false;
    });
  },
});

export const leaderboardReducer = leaderboardSlice.reducer;
