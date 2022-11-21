import { createSlice } from '@reduxjs/toolkit';
import { fetchChangeUser, fetchChangePassword } from './UsersActions';

import { ChangeDataState } from '../types';

const initialState: ChangeDataState = {
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
      state.loading = false;
    });
    //fetchChangePassword
    buider.addCase(fetchChangePassword.pending, state => {
      state.loading = true;
    });
    buider.addCase(fetchChangePassword.fulfilled, state => {
      state.loading = false;
    });
    buider.addCase(fetchChangePassword.rejected, state => {
      state.loading = false;
    });
  },
});

export const usersReducer = usersSlice.reducer;
