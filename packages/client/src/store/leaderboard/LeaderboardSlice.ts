import { createSlice } from '@reduxjs/toolkit';
import { getAllLeaderboard } from './LeaderboardActions';

interface ILeaderBoardState {
  leaderboard: [];
  isLoading: boolean;
}

const initialState: ILeaderBoardState = {
  leaderboard: [],
  isLoading: false,
};

export const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState,
  reducers: {},
  extraReducers: buider => {
    buider.addCase(getAllLeaderboard.pending, state => {
      state.isLoading = true;
    });
    buider.addCase(getAllLeaderboard.fulfilled, (state, action) => {
      state.leaderboard = action.payload as [];
      state.isLoading = false;
    });
  },
});

export const leaderboardReducer = leaderboardSlice.reducer;
