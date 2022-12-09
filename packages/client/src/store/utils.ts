import { env } from 'src/constants/Env';
import { ILocation } from './geolocation/GeoSlice';

const baseUrl = env.HOST_API;

export const fetchApi = <T>(path: string, options: RequestInit): Promise<T> => {
  return fetch(`${baseUrl}${path}`, {
    ...options,
    credentials: 'include',
  }).then(res => {
    if (!res.ok) {
      return Promise.reject(res.status);
    }

    const contentType = res.headers.get('content-type');

    if (contentType && contentType.indexOf('application/json') !== -1) {
      return res.json();
    }
    if (contentType && contentType.indexOf('text/plain') !== -1) {
      return res.text();
    }

    return res;
  });
};

export const reverseGeocoding = async (
  options: RequestInit
): Promise<ILocation> => {
  const response = fetch(`${env.GEO_CODER}`, {
    ...options,
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Token ' + env.TOKEN_FOR_GEO_CODER,
    },
  }).then(res => {
    if (!res.ok) {
      return Promise.reject(res.status);
    }

    const contentType = res.headers.get('content-type');

    if (contentType && contentType.indexOf('application/json') !== -1) {
      return res.json();
    }
    if (contentType && contentType.indexOf('text/plain') !== -1) {
      return res.text();
    }

    return res;
  }) as Promise<ILocation>;

  return response;
};
