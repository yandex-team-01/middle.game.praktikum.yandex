import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const selectErrorList = createSelector(
  (state: RootState) => state.error,
  error => error.errorList
);
