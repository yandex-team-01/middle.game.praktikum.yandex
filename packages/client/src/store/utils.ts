const baseUrl = 'https://ya-praktikum.tech/api/v2/auth';

export const fetchApi = (path: string, options: RequestInit): Promise<any> => {
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

    return res.text();
  });
};
