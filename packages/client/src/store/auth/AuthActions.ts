import { createAsyncThunk } from '@reduxjs/toolkit';
import { SignupData, SigninData, oAuthServiceIdData } from 'src/modules/IAuth';
import { fetchApi } from '../utils';
import { addError } from '../error/ErrorSlice';
import { IUser } from 'src/modules/IUser';
import { defaultHeaders } from 'src/constants/http';
import { i18n } from 'i18next';
import { SignUpUserId } from './types';

export const fetchAuth = createAsyncThunk<IUser, undefined, { extra: i18n }>(
  'auth/fetchAuth',
  async (_, thunkApi) => {
    try {
      return await fetchApi<IUser>('/auth/user', {
        credentials: 'include',
      });
    } catch (error) {
      const errorMessageText = thunkApi.extra.t('LoginError');
      return thunkApi.rejectWithValue(errorMessageText);
    }
  }
);

export const fetchSignin = createAsyncThunk<
  string,
  SigninData,
  { extra: i18n }
>('auth/fetchSignin', async (data: SigninData, thunkApi) => {
  try {
    const res: string = await fetchApi('/auth/signin', {
      method: 'POST',
      headers: defaultHeaders,
      credentials: 'include',
      body: JSON.stringify(data),
    });

    thunkApi.dispatch(fetchAuth());

    return res;
  } catch (error) {
    const errorMessageText = thunkApi.extra.t('LoginError');
    thunkApi.dispatch(addError(errorMessageText));
    return thunkApi.rejectWithValue(errorMessageText);
  }
});

export const fetchSignup = createAsyncThunk<
  SignUpUserId,
  SignupData,
  { extra: i18n }
>('auth/fetchSignup', async (data: SignupData, thunkApi) => {
  try {
    const res: SignUpUserId = await fetchApi('/auth/signup', {
      method: 'POST',
      headers: defaultHeaders,
      credentials: 'include',
      body: JSON.stringify(data),
    });
    thunkApi.dispatch(fetchAuth());

    return res;
  } catch (error) {
    const errorMessageText = thunkApi.extra.t('RegistrationError');
    thunkApi.dispatch(addError(errorMessageText));
    return thunkApi.rejectWithValue(errorMessageText);
  }
});

export const fetchLogout = createAsyncThunk<string, undefined, { extra: i18n }>(
  'auth/fetchLogout',
  async (_, thunkApi) => {
    try {
      const res: string = await fetchApi('/auth/logout', {
        method: 'POST',
        credentials: 'include',
        headers: defaultHeaders,
      });

      return res;
    } catch (error) {
      const errorMessageText = thunkApi.extra.t('LogoutError');
      thunkApi.dispatch(addError(errorMessageText));
      return thunkApi.rejectWithValue(errorMessageText);
    }
  }
);

//первый шаг oAuth - получаем service_id с api practicum
export const fetchOAuthStepOneGetServiceIdFromApiPracticum = createAsyncThunk<
  oAuthServiceIdData,
  undefined,
  { extra: i18n }
>('oauth/fetchServiceIdFromYaApi', async (_, thunkApi) => {
  try {
    const res: oAuthServiceIdData = await fetchApi(`/oauth/yandex/service-id`, {
      method: 'GET',
      headers: defaultHeaders,
    });
    oAuthStepTwoRedirectToOAuthProvider(res.service_id);
    return res;
  } catch (error) {
    const i18n = thunkApi.extra as i18n;
    const errorMessageText = i18n.t('LoginError');
    thunkApi.dispatch(addError(errorMessageText));
    throw error;
  }
});

//второй шаг oAuth - редирект на страницу получения согласия
const oAuthStepTwoRedirectToOAuthProvider = (service_id: string) => {
  const url = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${service_id}&redirect_uri=${
    import.meta.env.VITE_REDIRECT_URI
  }`;
  window.location.href = url;
};

//третий шаг oAuth - получаем подтвержедние от api practicum взамен на код полученный на странице согласия
export const fetchOAuthStepThreeGetApproveFromApiPracticum = createAsyncThunk<
  string,
  string,
  { extra: i18n }
>('oauth', async (code: string, thunkApi) => {
  try {
    const data = {
      code: code,
      redirect_uri: import.meta.env.VITE_REDIRECT_URI,
    };
    const res: string = await fetchApi('/oauth/yandex', {
      method: 'POST',
      headers: defaultHeaders,
      body: JSON.stringify(data),
      credentials: 'include',
    });
    thunkApi.dispatch(fetchAuth());
    return res;
  } catch (error) {
    const errorMessageText = thunkApi.extra.t('LoginError');
    thunkApi.dispatch(addError(errorMessageText));
    throw error;
  }
});
