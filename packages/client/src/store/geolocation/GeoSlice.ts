import { createSlice } from '@reduxjs/toolkit';
import { fetchGeoLocation } from './GeoActions';

interface IData {
  country_iso_code: string
}

interface ISuggestions {
  value: string,
  unrestricted_value: string
  data: IData
}

export interface ILocation {
  suggestions: ISuggestions[]
}

interface IGeoLocation {
  location: ILocation | undefined,
  loading: boolean,
}

const initialState: IGeoLocation = {
  location: undefined,
  loading: false,
};

export const geolocationSlice = createSlice({
  name: 'geolocation',
  initialState,
  reducers: {},
  extraReducers: buider => {
    buider.addCase(fetchGeoLocation.fulfilled, (state, action) => {
      state.location = action.payload;
      state.loading = false;
    });
    buider.addCase(fetchGeoLocation.pending, state => {
      state.loading = true;
    });
    buider.addCase(fetchGeoLocation.rejected, state => {
      state.loading = false;
    });
  },
});

export const geolocationReducer = geolocationSlice.reducer;
