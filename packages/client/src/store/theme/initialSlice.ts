import { ThemeState } from '../types';
import { themes } from 'src/components/ThemeTogglerButton/ThemeContext';

const themeValueFromLocalStorage = localStorage.getItem('theme');
const theme =
  themeValueFromLocalStorage === 'light' ? themes.light : themes.dark;

export const initialState: ThemeState = {
  theme: theme,
};
