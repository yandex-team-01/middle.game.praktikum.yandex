import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const selectGeoLocation = createSelector(
  (state: RootState) => state.geolocation,
  geolocation => geolocation.location
);
