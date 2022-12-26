import { ThemeState } from '../types';
import { themes } from 'src/utils/theme/ThemeContext';
import {
  getLocalStorageItem,
  LocalStorageItems,
} from 'src/utils/getOrSetLocalStorageItem';

const themeValueFromLocalStorage = getLocalStorageItem(LocalStorageItems.Theme);
const theme =
  themeValueFromLocalStorage === 'light' ? themes.light : themes.dark;

export const initialState: ThemeState = {
  activeTheme: theme,
};
