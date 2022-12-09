import { createAsyncThunk } from '@reduxjs/toolkit';
import { addLeader, getLeaderboard } from 'src/api/leaderboardApi';
import { addError } from '../error/ErrorSlice';
import { RootState } from '../store';
import { ILeaderboardRequest, Leader } from './types';

export const recordScore = createAsyncThunk<
  Leader[],
  number,
  { state: RootState }
>('leaderboard', async (score, thunkApi) => {
  const state = thunkApi.getState();
  const login = state.auth.user?.login;
  try {
    return await addLeader(score, login);
  } catch (error) {
    thunkApi.dispatch(addError('Ошибка записи результата игры'));
    thunkApi.rejectWithValue('Ошибка записи результата игры');
    throw error;
  }
});

export const getAllLeaderboard = createAsyncThunk<
  Leader[],
  ILeaderboardRequest
>('leaderboard', async (data: ILeaderboardRequest, thunkApi) => {
  try {
    return await getLeaderboard(data);
  } catch (error) {
    thunkApi.dispatch(addError('Ошибка запроса лидерборда'));
    thunkApi.rejectWithValue('Ошибка запроса лидерборда');
    throw error;
  }
});
