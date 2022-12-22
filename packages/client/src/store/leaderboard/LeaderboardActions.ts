import { createAsyncThunk } from '@reduxjs/toolkit';
import { addLeader, getLeaderboard } from 'src/api/leaderboardApi';
import { addError } from '../error/ErrorSlice';
import { RootState } from '../store';
import { ILeaderboardRequest, Leader } from './types';

export const recordScore = createAsyncThunk<
  Leader[],
  number,
  { state: RootState }
>('leaderboard/score', async (score, thunkApi) => {
  const state = thunkApi.getState();

  if (!state.auth.user) {
    thunkApi.dispatch(addError('Ошибка записи результата игры'));
    thunkApi.rejectWithValue('Ошибка записи результата игры');
    throw new Error();
  }

  const login = state.auth.user.login;

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
  ILeaderboardRequest,
  { extra: unknown }
>('leaderboard/all', async (data: ILeaderboardRequest, { thunkApi, extra }) => {
  try {
    console.log(extra);
    const res = await getLeaderboard(data);
    return res;
  } catch (error) {
    thunkApi.dispatch(addError('Ошибка запроса лидерборда'));
    thunkApi.rejectWithValue('Ошибка запроса лидерборда');
    throw error;
  }
});
