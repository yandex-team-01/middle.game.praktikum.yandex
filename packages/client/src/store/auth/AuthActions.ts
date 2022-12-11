import { createAsyncThunk } from '@reduxjs/toolkit';
import { SignupData, SigninData, oAuthServiceIdData } from 'src/modules/IAuth';
import { fetchApi } from '../utils';
import { addError } from '../error/ErrorSlice';
import { IUser } from 'src/modules/IUser';
import { env } from 'src/constants/Env';
import { defaultHeaders } from 'src/constants/http';

export const fetchAuth = createAsyncThunk(
  'auth/fetchAuth',
  async (_, thunkApi) => {
    try {
      return await fetchApi<IUser>('/auth/user', {});
    } catch (error) {
      return thunkApi.rejectWithValue('Login error');
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
      thunkApi.dispatch(addError('Login error'));
      return thunkApi.rejectWithValue('Login error');
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
      thunkApi.dispatch(addError('Registration error'));
      return thunkApi.rejectWithValue('Registration error');
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
      thunkApi.dispatch(addError('Logout error'));
      return thunkApi.rejectWithValue('Logout error');
    }
  }
);

//первый шаг oAuth - получаем service_id с api practicum
export const fetchOAuthStepOneGetServiceIdFromApiPracticum = createAsyncThunk(
  'oauth/fetchServiceIdFromYaApi',
  async (_, thunkApi) => {
    try {
      const res: oAuthServiceIdData = await fetchApi(
        `/oauth/yandex/service-id`,
        {
          method: 'GET',
          headers: defaultHeaders,
        }
      );
      oAuthStepTwoRedirectToOAuthProvider(res.service_id);
    } catch (error) {
      thunkApi.dispatch(addError('Login error'));
      throw error;
    }
  }
);

//второй шаг oAuth - редирект на страницу получения согласия
const oAuthStepTwoRedirectToOAuthProvider = (service_id: string) => {
  const url = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${service_id}&redirect_uri=${env.REDIRECT_URI}`;
  window.location.href = url;
};

//третий шаг oAuth - получаем подтвержедние от api practicum взамен на код полученный на странице согласия
export const fetchOAuthStepThreeGetApproveFromApiPracticum = createAsyncThunk(
  'oauth',
  async (code: string, thunkApi) => {
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
      thunkApi.dispatch(fetchAuth());

      return res;
    } catch (error) {
      thunkApi.dispatch(addError('Login error'));
      throw error;
    }
  }
);
