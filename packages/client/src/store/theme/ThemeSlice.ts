import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  LocalStorageItems,
  setLocalStorageItem,
} from 'src/utils/getOrSetLocalStorageItem';
import { themes } from 'src/utils/theme/ThemeContext';
import { initialState } from './initialSlice';

export const themeSlice = createSlice({
  name: 'themes',
  initialState,
  reducers: {
    changeTheme(state, action: PayloadAction<Record<'background', string>>) {
      state.activeTheme = action.payload;
      const themeValueForLocalStorage =
        action.payload === themes.light ? 'light' : 'dark';
      setLocalStorageItem(LocalStorageItems.Theme, themeValueForLocalStorage);
    },
  },
});

export const themeReducer = themeSlice.reducer;
export const { changeTheme } = themeSlice.actions;
