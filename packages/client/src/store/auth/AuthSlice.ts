import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  fetchAuth,
  fetchLogout,
  fetchSignin,
  fetchSignup,
} from './AuthActions';
import { IUser } from 'src/modules/IUser';

import { AuthState } from '../types';

const initialState: AuthState = {
  checkAuth: false,
  auth: false,
  user: null,
  loading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateUser(state, action: PayloadAction<IUser>) {
      state.user = action.payload;
    },
  },
  extraReducers: buider => {
    //fetchAuth
    buider.addCase(fetchAuth.pending, state => {
      state.loading = true;
    });
    buider.addCase(
      fetchAuth.fulfilled,
      (state, action: PayloadAction<IUser>) => {
        state.checkAuth = true;
        state.auth = true;
        state.user = action.payload;
        state.loading = false;
      }
    );
    buider.addCase(fetchAuth.rejected, state => {
      state.checkAuth = true;
      state.auth = false;
      state.loading = false;
    });
    //fetchSignin
    buider.addCase(fetchSignin.pending, state => {
      state.loading = true;
    });
    buider.addCase(fetchSignin.fulfilled, state => {
      state.loading = false;
      state.checkAuth = true;
      state.auth = true;
    });
    buider.addCase(fetchSignin.rejected, state => {
      state.loading = false;
      state.checkAuth = true;
      state.auth = false;
    });
    //fetchSignup
    buider.addCase(fetchSignup.pending, state => {
      state.loading = true;
    });
    buider.addCase(fetchSignup.fulfilled, state => {
      state.loading = false;
      state.checkAuth = true;
      state.auth = true;
    });
    buider.addCase(fetchSignup.rejected, state => {
      state.loading = false;
      state.checkAuth = true;
      state.auth = false;
    });
    //fetchLogout
    buider.addCase(fetchLogout.pending, state => {
      state.loading = true;
    });
    buider.addCase(fetchLogout.fulfilled, state => {
      state.loading = false;
      state.checkAuth = true;
      state.auth = false;
      state.user = null;
    });
    buider.addCase(fetchLogout.rejected, state => {
      state.loading = false;
      state.checkAuth = true;
    });
  },
});

export const { updateUser } = authSlice.actions;

export const authReducer = authSlice.reducer;
