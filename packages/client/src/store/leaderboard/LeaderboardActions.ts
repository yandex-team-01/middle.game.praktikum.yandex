import { createAsyncThunk } from '@reduxjs/toolkit';
import { addError } from '../error/ErrorSlice';
import { fetchApi } from '../utils';

const defaultHeaders = {
  'content-type': 'application/json',
  mode: 'cors',
};

export interface IScore {
  data: {
    huggywuggyscore: number;
    user: string;
  };
  ratingFieldName: string;
  teamName: string;
}

export interface ILeaderboardRequest {
  ratingFieldName: string;
  cursor: number;
  limit: number;
}

export const recordScore = createAsyncThunk(
  'leaderboard',
  async (data: IScore, thunkApi) => {
    try {
      const res = await fetchApi('/leaderboard', {
        method: 'POST',
        headers: defaultHeaders,
        body: JSON.stringify(data),
      });
      return res;
    } catch (error) {
      thunkApi.dispatch(addError('Ошибка записи результата игры'));
      thunkApi.rejectWithValue('Ошибка записи результата игры');
      throw error;
    }
  }
);

export const getAllLeaderboard = createAsyncThunk(
  'leaderboard',
  async (data: ILeaderboardRequest, thunkApi) => {
    try {
      const res = await fetchApi('/leaderboard/all', {
        method: 'POST',
        headers: defaultHeaders,
        body: JSON.stringify(data),
      });
      return res;
    } catch (error) {
      thunkApi.dispatch(addError('Ошибка запроса лидерборда'));
      thunkApi.rejectWithValue('Ошибка запроса лидерборда');
      throw error;
    }
  }
);
