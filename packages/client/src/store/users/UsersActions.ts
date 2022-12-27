import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchApi } from '../utils';
import { addError } from '../error/ErrorSlice';

import { updateUser } from '../auth/AuthSlice';
import { IUser } from 'src/modules/IUser';
import { ChangePasswordData } from 'src/modules/IUsers';
import { defaultHeaders } from 'src/constants/http';
import { i18n } from 'i18next';

export const fetchChangeUser = createAsyncThunk<IUser, IUser, { extra: i18n }>(
  'auth/fetchChangeUser',
  async (data: IUser, thunkApi) => {
    try {
      const res: IUser = await fetchApi('/user/profile', {
        method: 'PUT',
        headers: defaultHeaders,
        credentials: 'include',
        body: JSON.stringify(data),
      });
      thunkApi.dispatch(updateUser(res));
      return res;
    } catch (error) {
      const errorMessageText = thunkApi.extra.t('ProfileModificationError');
      thunkApi.dispatch(addError(errorMessageText));
      thunkApi.rejectWithValue(errorMessageText);
      throw error;
    }
  }
);

export const fetchChangePassword = createAsyncThunk<
  string,
  ChangePasswordData,
  { extra: i18n }
>('auth/fetchChangePassword', async (data: ChangePasswordData, thunkApi) => {
  try {
    const res: string = await fetchApi('/user/password', {
      method: 'PUT',
      headers: defaultHeaders,
      credentials: 'include',
      body: JSON.stringify(data),
    });
    return res;
  } catch (error) {
    const errorMessageText = thunkApi.extra.t('PasswordChangeError');
    thunkApi.dispatch(addError(errorMessageText));
    thunkApi.rejectWithValue(errorMessageText);
    throw error;
  }
});

export const fetchChangeAvatar = createAsyncThunk<IUser, File, { extra: i18n }>(
  'auth/fetchChangeAvatar',
  async (data: File, thunkApi) => {
    try {
      const formData = new FormData();
      formData.append('avatar', data);
      const res: IUser = await fetchApi('/user/profile/avatar', {
        method: 'PUT',
        credentials: 'include',
        body: formData,
      });
      thunkApi.dispatch(updateUser(res));
      return res;
    } catch (error) {
      const errorMessageText = thunkApi.extra.t('ErrorChangingProfileAvatar');
      thunkApi.dispatch(addError(errorMessageText));
      thunkApi.rejectWithValue(errorMessageText);
      throw error;
    }
  }
);
