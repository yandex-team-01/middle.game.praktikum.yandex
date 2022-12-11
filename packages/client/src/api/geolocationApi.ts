import { defaultHeaders } from 'src/constants/http';
import { GeoCoordinates } from 'src/store/geolocation/GeoActions';
import { ILocation } from 'src/store/geolocation/GeoSlice';
import { fetchApi } from 'src/store/utils';
import { env } from 'src/constants/Env';

export const reverseGeocoding = (coordinates: GeoCoordinates) => {
  const res = fetchApi<ILocation>('', {
    method: 'POST',
    headers: {
      ...defaultHeaders,
      Accept: 'application/json',
      Authorization: 'Token ' + env.TOKEN_FOR_GEO_CODER,
    },
    body: JSON.stringify(coordinates),
  }, `${env.GEO_CODER}`);
  return res;
};
