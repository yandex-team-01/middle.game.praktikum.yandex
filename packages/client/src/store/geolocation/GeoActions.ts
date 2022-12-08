import { createAsyncThunk } from '@reduxjs/toolkit';
import { GeoController } from 'src/api/GeoController';
import { ILocation } from './GeoSlice';

export interface GeoCoordinates {
  lat: number;
  lon: number;
}

const geoController = new GeoController();

export const fetchGeoLocation = createAsyncThunk(
  'geolocation',
  async (coordinates: GeoCoordinates) => {
    try {
      const res: ILocation = await geoController.reverseGeocoding({
        method: 'POST',
        body: JSON.stringify(coordinates),
      });
      return res;
    } catch (error) {
      console.log(error);
    }
  }
);
