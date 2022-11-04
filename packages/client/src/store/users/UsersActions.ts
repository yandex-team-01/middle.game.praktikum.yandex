import { createAsyncThunk } from '@reduxjs/toolkit';
import { FindUserData, UserData, ChangePasswordData } from './../../modules/IUsers';
import { fetchApi } from '../utils';
import { addError } from '../error/ErrorSlice';

const defaultHeaders = {
  'content-type': 'application/json',
  mode: 'cors',
};

export const fetchFindUser = createAsyncThunk(
  'user/fetchFindUser',
  async (data: FindUserData, thunkApi) => {
    try {
      const res = await fetchApi('/user/search', {
        method: 'POST',
        headers: defaultHeaders,
        body: JSON.stringify(data),
      });
      return res;
    } catch (error) {
    }
  }
);

export const fetchChangeUser = createAsyncThunk(
  'auth/fetchChangeUser',
  async (data: UserData, thunkApi) => {
    try {
      const res = await fetchApi('/user/profile', {
        method: 'PUT',
        headers: defaultHeaders,
        body: JSON.stringify(data),
      });
      return res;
    } catch (error) {
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
    }
  }
);
