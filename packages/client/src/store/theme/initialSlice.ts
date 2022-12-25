import { ThemeState } from '../types';
import { themes } from 'src/utils/theme/ThemeContext';
import { cookies } from 'src/utils/cookies';
import { COOKIE_THEME_NAME } from 'src/constants/themes';

const jsonTheme = cookies.get(COOKIE_THEME_NAME);
const themeValueFromCookie = jsonTheme ? jsonTheme : undefined;

let theme;
if (themeValueFromCookie) {
  theme = themeValueFromCookie === themes.light ? themes.light : themes.dark;
} else {
  //Если нет в куках, и не пришла из базы, то дефолтная. (должна совпадать с дефолтной на сервере).
  //todo: как синхронизировать дефолтные в ssr и тут?
  theme = themes.light;
}

export const initialState: ThemeState = {
  activeTheme: theme,
};
