import React from 'react';

export const themes = {
  light: {
    background: 'rgb(55, 68, 110)',
  },
  dark: {
    background: 'rgb(0, 0, 0)',
  },
};

export const ThemeContext = React.createContext(themes.dark);
