import { createAsyncThunk } from '@reduxjs/toolkit';

import { SignupData, SigninData, oAuthServiceIdData } from 'src/modules/IAuth';

import { fetchApi } from '../utils';
import { addError } from '../error/ErrorSlice';
import { IUser } from 'src/modules/IUser';
import { env } from 'src/constants/Env';

const defaultHeaders = {
  'content-type': 'application/json',
  mode: 'cors',
};

export const fetchAuth = createAsyncThunk(
  'auth/fetchAuth',
  async (_, thunkApi) => {
    try {
      return await fetchApi<IUser>('/auth/user', {});
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

      thunkApi.dispatch(fetchAuth());

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
      thunkApi.dispatch(fetchAuth());

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
      return thunkApi.rejectWithValue('Ошибка выхода');
    }
  }
);

export const fetchOAuthStepOneGetServiceId = async () => {
  try {
    const res: oAuthServiceIdData = await fetchApi(
      `/oauth/yandex/service-id?redirect_uri=${env.REDIRECT_URI}`,
      {
        method: 'GET',
        headers: defaultHeaders,
      }
    );
    oAuthStepTwoRedirectToProvider(res.service_id);
  } catch (error) {
    console.error(error);
  }
};

const oAuthStepTwoRedirectToProvider = (service_id: string) => {
  const url = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${service_id}&redirect_uri=${env.REDIRECT_URI}`;
  window.location.href = url;
};

export const fetchOAuthStepThreeGetApprove = async (code: string) => {
  try {
    const data = {
      code: code,
      redirect_uri: env.REDIRECT_URI,
    };
    const res = await fetchApi('/oauth/yandex', {
      method: 'POST',
      headers: defaultHeaders,
      body: JSON.stringify(data),
      credentials: 'include',
    });
    // oAuthStepTwoRedirectToProvider(res.service_id);
    console.log(res);
  } catch (error) {
    console.error(error);
  }
};
