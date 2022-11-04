import env from "../../env"

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
