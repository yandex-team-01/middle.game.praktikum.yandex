import { createAsyncThunk } from '@reduxjs/toolkit';
import { reverseGeocoding } from '../utils';

export interface GeoCoordinates {
  lat: number;
  lon: number;
}

export const fetchGeoLocation = createAsyncThunk(
  'geolocation',
  async (coordinates: GeoCoordinates) => {
    try {
      const res = await reverseGeocoding({
        method: 'POST',
        body: JSON.stringify(coordinates),
      });
      return res;
    } catch (error) {
      console.error(error);
    }
  }
);
