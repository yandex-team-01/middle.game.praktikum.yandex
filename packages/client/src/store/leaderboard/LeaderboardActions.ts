import { createAsyncThunk } from '@reduxjs/toolkit';
import { addLeader, getLeaderboard } from 'src/api/leaderboardApi';
import { addError } from '../error/ErrorSlice';
import { RootState } from '../store';
import { ILeaderboardRequest, Leader } from './types';
import { i18n } from 'i18next';

export const recordScore = createAsyncThunk<
  Leader[],
  number,
  { state: RootState; extra: i18n }
>('leaderboard/score', async (score, thunkApi) => {
  const state = thunkApi.getState();
  const errorMessageText = thunkApi.extra.t('ErrorRecordingTheResultOfTheGame');
  if (!state.auth.user) {
    thunkApi.dispatch(addError(errorMessageText));
    thunkApi.rejectWithValue(errorMessageText);
    throw new Error(errorMessageText);
  }

  const login = state.auth.user.login;

  try {
    return await addLeader(score, login);
  } catch (error) {
    thunkApi.dispatch(addError(errorMessageText));
    thunkApi.rejectWithValue(errorMessageText);
    throw error;
  }
});

export const getAllLeaderboard = createAsyncThunk<
  Leader[],
  ILeaderboardRequest,
  { extra: i18n }
>('leaderboard/all', async (data: ILeaderboardRequest, thunkApi) => {
  try {
    const res = await getLeaderboard(data);
    return res;
  } catch (error) {
    const errorMessageText = thunkApi.extra.t('LeaderboardRequestError');
    thunkApi.dispatch(addError(errorMessageText));
    thunkApi.rejectWithValue(errorMessageText);
    throw error;
  }
});
