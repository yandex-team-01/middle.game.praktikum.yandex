import { GeoCoordinates } from "src/store/geolocation/GeoActions";

export const geolocation = (callback: (date: GeoCoordinates) => void) => {
    let coordinates: GeoCoordinates | null = null;

    const success = (position: GeolocationPosition) => {
        const latitude: number = position.coords.latitude;
        const longitude: number = position.coords.longitude;
        coordinates = { lat: latitude, lon: longitude };

        callback(coordinates);
    };

    const error = () => {
        console.log('Не удалось получить информацию о местонахождении');
    };

    if (!navigator.geolocation) {
        console.log('Геолокация не поддерживается вашим браузером');
    } else {
        navigator.geolocation.getCurrentPosition(success, error);
    }
};
