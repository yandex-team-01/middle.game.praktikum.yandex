import { UserData } from './../../modules/IUsers';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  fetchChangeUser,
  fetchChangePassword
} from './UsersActions';
import { IUser } from 'src/modules/IUser';

import { AuthState } from '../types';

const initialState: AuthState = {
  checkAuth: false,
  auth: false,
  user: null,
  loading: false,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: buider => {
    //fetchChangeUser
    buider.addCase(fetchChangeUser.pending, state => {
      state.loading = true;
    });
    buider.addCase(fetchChangeUser.rejected, state => {
      state.checkAuth = true;
      state.auth = false;
      state.loading = false;
    });
    //fetchChangePassword
    buider.addCase(fetchChangePassword.pending, state => {
      state.loading = true;
    });
    buider.addCase(fetchChangePassword.fulfilled, state => {
      state.loading = false;
      state.checkAuth = true;
      state.auth = true;
    });
    buider.addCase(fetchChangePassword.rejected, state => {
      state.loading = false;
      state.checkAuth = true;
      state.auth = false;
    });
  },
});

export const usersReducer = usersSlice.reducer;
