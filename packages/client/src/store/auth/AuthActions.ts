import { SignupData, SigninData, oAuthServiceIdData } from 'src/modules/IAuth';
import { fetchApi } from '../utils';
import { addError } from '../error/ErrorSlice';
import { IUser } from 'src/modules/IUser';
import { defaultHeaders } from 'src/constants/http';
import { getOrCreateUser } from 'src/api/userApi';
import { COOKIE_THEME_NAME } from 'src/constants/themes';
import { getCookies } from 'src/utils/cookies';
import { themes } from 'src/utils/theme/ThemeContext';
import { SignUpUserId } from './types';
import { createAppAsyncThunk } from 'src/utils/thunk';

export const fetchAuth = createAppAsyncThunk(
  'auth/fetchAuth',
  async (_: void, thunkApi) => {
    try {
      const res = await fetchApi<IUser>('/auth/user', {
        credentials: 'include',
      });
      return res;
    } catch (error) {
      const errorMessageText = thunkApi.extra.t('LoginError');
      return thunkApi.rejectWithValue(errorMessageText);
    }
  }
);

export const fetchSignin = createAppAsyncThunk(
  'auth/fetchSignin',
  async (data: SigninData, thunkApi) => {
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
  }
);

export const fetchSignup = createAppAsyncThunk(
  'auth/fetchSignup',
  async (data: SignupData, thunkApi) => {
    try {
      const res: SignUpUserId = await fetchApi('/auth/signup', {
        method: 'POST',
        headers: defaultHeaders,
        credentials: 'include',
        body: JSON.stringify(data),
      });
      thunkApi.dispatch(fetchAuth());

      const themeValueFromCookie = getCookies().get(COOKIE_THEME_NAME);
      const currentTheme = themeValueFromCookie
        ? themeValueFromCookie
        : themes.light;

      const { password, ...rawDataForDb } = data; // eslint-disable-line @typescript-eslint/no-unused-vars

      const dataForDB = {
        ...rawDataForDb,
        id: res.id,
        display_name: null,
        avatar: null,
        theme: JSON.stringify(currentTheme),
      };

      await getOrCreateUser(res.id, dataForDB);

      return res;
    } catch (error) {
      const errorMessageText = thunkApi.extra.t('RegistrationError');
      thunkApi.dispatch(addError(errorMessageText));
      return thunkApi.rejectWithValue(errorMessageText);
    }
  }
);

export const fetchLogout = createAppAsyncThunk(
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
export const fetchOAuthStepOneGetServiceIdFromApiPracticum =
  createAppAsyncThunk('oauth/fetchServiceIdFromYaApi', async (_, thunkApi) => {
    try {
      const res: oAuthServiceIdData = await fetchApi(
        `/oauth/yandex/service-id`,
        {
          method: 'GET',
          headers: defaultHeaders,
        }
      );
      // oAuthStepTwoRedirectToOAuthProvider(res.service_id);
      oAuthStepTwoRedirectToOAuthProvider('5a2db4fa908b4c4aa25725a8bd4dae7a');
      return res;
    } catch (error) {
      const errorMessageText = thunkApi.extra.t('LoginError');
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
export const fetchOAuthStepThreeGetApproveFromApiPracticum =
  createAppAsyncThunk('oauth', async (code: string, thunkApi) => {
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
