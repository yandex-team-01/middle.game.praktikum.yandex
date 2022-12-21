import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const selectTheme = createSelector(
  (state: RootState) => state.themes,
  theme => theme.theme
);
