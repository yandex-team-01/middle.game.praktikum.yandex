import { createAsyncThunk } from '@reduxjs/toolkit';
import { reverseGeocoding } from 'src/api/geolocationApi';

export interface GeoCoordinates {
  lat: number;
  lon: number;
}

export const fetchGeoLocation = createAsyncThunk(
  'geolocation',
  async (coordinates: GeoCoordinates) => {
    try {
      const res = await reverseGeocoding(coordinates);
      return res;
    } catch (error) {
      console.error(error);
    }
  }
);
