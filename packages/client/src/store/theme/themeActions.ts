import { createAsyncThunk } from '@reduxjs/toolkit';
import { updateTheme } from 'src/api/themeApi';
import { addError } from '../error/ErrorSlice';
import { RootState } from 'src/store/store';

export interface IThemeData {
  id: number;
  background: string;
}
export interface ITheme {
  background: string;
}

export const changeTheme = createAsyncThunk<
  ITheme,
  ITheme,
  { state: RootState }
>('user/theme', async (data, thunkApi) => {
  try {
    const theme = data;
    const state = thunkApi.getState();
    const userId = state.auth.user?.id;
    if (userId) {
      await updateTheme({ id: userId, theme: JSON.stringify(theme) });
      return data;
    }
    thunkApi.fulfillWithValue(data);
    return data;
  } catch (error) {
    thunkApi.dispatch(addError('Theme change error'));
    return thunkApi.rejectWithValue('Theme change error');
  }
});
