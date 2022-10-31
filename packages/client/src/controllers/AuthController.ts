import { createAsyncThunk } from '@reduxjs/toolkit';
import { SignupData, SigninData } from '../modules/IAuth';
import { fetchApi } from './utils';
import { errorSlice } from '../store/slices/ErrorSlice';

const defaultHeaders = {
  'content-type': 'application/json',
  mode: 'cors',
};

export const fetchAuth = createAsyncThunk(
  'auth/fetchAuth',
  async (_, thunkApi) => {
    try {
      const res = await fetchApi('/user', {});
      return res;
    } catch (error) {
      const { setError } = errorSlice.actions;

      if (error instanceof Error) {
        thunkApi.dispatch(setError(error.message));
      } else {
        thunkApi.dispatch(setError(`Какая-то ошибка в fetchAuth`));
      }
      return thunkApi.rejectWithValue(`Какая-то ошибка в fetchAuth`);
    }
  }
);

export const fetchSignin = createAsyncThunk(
  'auth/fetchSignin',
  async (data: SigninData, thunkApi) => {
    try {
      const res = await fetchApi('/signin', {
        method: 'POST',
        headers: defaultHeaders,
        body: JSON.stringify(data),
      });

      return res;
    } catch (error) {
      const { setError } = errorSlice.actions;

      if (error instanceof Error) {
        thunkApi.dispatch(setError(error.message));
      } else {
        thunkApi.dispatch(setError(`Какая-то ошибка в fetchAuth`));
      }

      return thunkApi.rejectWithValue(`Какая-то ошибка в fetchAuth`);
    }
  }
);

export const fetchSignup = createAsyncThunk(
  'auth/fetchSignup',
  async (data: SignupData, thunkApi) => {
    try {
      const res = await fetchApi('/signup', {
        method: 'POST',
        headers: defaultHeaders,
        body: JSON.stringify(data),
      });

      return res;
    } catch (error) {
      const { setError } = errorSlice.actions;

      if (error instanceof Error) {
        thunkApi.dispatch(setError(error.message));
      } else {
        thunkApi.dispatch(setError(`Какая-то ошибка в fetchAuth`));
      }

      return thunkApi.rejectWithValue(`Какая-то ошибка в fetchAuth`);
    }
  }
);
