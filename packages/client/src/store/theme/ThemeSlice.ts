import { createSlice } from '@reduxjs/toolkit';
import { themes } from 'src/utils/theme/ThemeContext';
import { initialState } from './initialSlice';
import { changeTheme } from './themeActions';
import { getCookies } from 'src/utils/cookies';
import { COOKIE_THEME_NAME } from 'src/constants/themes';

export const themeSlice = createSlice({
  name: 'themes',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(changeTheme.fulfilled, (state, action) => {
      const payloadTheme = action.payload;
      state.activeTheme = payloadTheme;
      const themeValueForCookie =
        payloadTheme === themes.light ? themes.light : themes.dark;

      getCookies().set(COOKIE_THEME_NAME, JSON.stringify(themeValueForCookie));
    });
  },
});

export const themeReducer = themeSlice.reducer;
export { changeTheme };
