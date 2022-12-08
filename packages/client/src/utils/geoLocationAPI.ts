import { TFunction } from 'i18next';
import { GeoCoordinates } from 'src/store/geolocation/GeoActions';

export const geolocation = (
  callback: (date: GeoCoordinates) => void,
  translation: TFunction
) => {
  let coordinates: GeoCoordinates | null = null;

  const success = (position: GeolocationPosition) => {
    const latitude: number = position.coords.latitude;
    const longitude: number = position.coords.longitude;
    coordinates = { lat: latitude, lon: longitude };

    callback(coordinates);
  };

  const error = () => {
    console.log(translation('errorGetLocation'));
  };

  if (!navigator.geolocation) {
    console.log(translation('errorGeolocation'));
  } else {
    navigator.geolocation.getCurrentPosition(success, error);
  }
};
