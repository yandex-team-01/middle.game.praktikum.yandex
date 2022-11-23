import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchApi } from '../utils';
import { addError } from '../error/ErrorSlice';

import { updateUser } from '../auth/AuthSlice';
import { IUser } from 'src/modules/IUser';
import { ChangePasswordData } from 'src/modules/IUsers';

const defaultHeaders = {
  'content-type': 'application/json',
  mode: 'cors',
};

export const fetchChangeUser = createAsyncThunk(
  'auth/fetchChangeUser',
  async (data: IUser, thunkApi) => {
    try {
      const res: IUser = await fetchApi('/user/profile', {
        method: 'PUT',
        headers: defaultHeaders,
        body: JSON.stringify(data),
      });
      thunkApi.dispatch(updateUser(res));
      return res;
    } catch (error) {
      thunkApi.dispatch(addError('Ошибка изменения профиля'));
      thunkApi.rejectWithValue('Ошибка изменения профиля');
      throw error;
    }
  }
);

export const fetchChangePassword = createAsyncThunk(
  'auth/fetchChangePassword',
  async (data: ChangePasswordData, thunkApi) => {
    try {
      const res = await fetchApi('/user/password', {
        method: 'PUT',
        headers: defaultHeaders,
        body: JSON.stringify(data),
      });
      return res;
    } catch (error) {
      thunkApi.dispatch(addError('Ошибка смены пароля'));
      thunkApi.rejectWithValue('Ошибка смены пароля');
      throw error;
    }
  }
);

export const fetchChangeAvatar = createAsyncThunk(
  'auth/fetchChangeAvatar',
  async (data: any, thunkApi) => {
    try {
      const formData = new FormData();
      formData.append('avatar', data);
      const res = await fetchApi('/user/profile/avatar', {
        method: 'PUT',
        body: formData,
      });
      return res;
    } catch (error) {
      thunkApi.dispatch(addError('Ошибка смены аватара профиля'));
      thunkApi.rejectWithValue('Ошибка смены аватара профиля');
      throw error;
    }
  }
);
