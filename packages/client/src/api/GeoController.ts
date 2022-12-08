import { env } from 'src/constants/Env';

const token = "3f663f65448628e0b9420a26933a0b03c3477c7f";

export class GeoController {
    reverseGeocoding = async <T>(options: RequestInit): Promise<T> => {
        const response = fetch(`${env.GEO_CODER}`, {
            ...options,
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Token " + token
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
        }) as Promise<T>;

        return response;
    };
};
