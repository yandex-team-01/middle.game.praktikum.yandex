import { createContext } from 'react';
import styles from './themes.module.scss';

export const themes = {
  light: {
    background: styles.backgroundColorLight,
  },
  dark: {
    background: styles.backgroundColorDark,
  },
};

export const ThemeContext = createContext(themes.dark);
