import { createAsyncThunk } from '@reduxjs/toolkit';

import { SignupData, SigninData } from 'src/modules/IAuth';

import { fetchApi } from '../utils';
import { addError } from '../error/ErrorSlice';

const defaultHeaders = {
  'content-type': 'application/json',
  mode: 'cors',
};

export const fetchAuth = createAsyncThunk(
  'auth/fetchAuth',
  async (_, thunkApi) => {
    try {
      return await fetchApi('/auth/user', {});
    } catch (error) {
      return thunkApi.rejectWithValue('Ошибка авторизации');
    }
  }
);

export const fetchSignin = createAsyncThunk(
  'auth/fetchSignin',
  async (data: SigninData, thunkApi) => {
    try {
      const res = await fetchApi('/auth/signin', {
        method: 'POST',
        headers: defaultHeaders,
        body: JSON.stringify(data),
      });

      return res;
    } catch (error) {
      thunkApi.dispatch(addError('Ошибка авторизации'));
      return thunkApi.rejectWithValue('Ошибка авторизации');
    }
  }
);

export const fetchSignup = createAsyncThunk(
  'auth/fetchSignup',
  async (data: SignupData, thunkApi) => {
    try {
      const res = await fetchApi('/auth/signup', {
        method: 'POST',
        headers: defaultHeaders,
        body: JSON.stringify(data),
      });

      return res;
    } catch (error) {
      thunkApi.dispatch(addError('Ошибка регистрации'));
      return thunkApi.rejectWithValue('Ошибка регистрации');
    }
  }
);

export const fetchLogout = createAsyncThunk(
  'auth/fetchLogout',
  async (_, thunkApi) => {
    try {
      const res = await fetchApi('/auth/logout', {
        method: 'POST',
        headers: defaultHeaders,
      });

      return res;
    } catch (error) {
      thunkApi.dispatch(addError('Ошибка выхода'));
      return thunkApi.rejectWithValue('Ошибка регистрации');
    }
  }
);
