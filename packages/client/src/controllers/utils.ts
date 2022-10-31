const baseUrl = 'https://ya-praktikum.tech/api/v2/auth';

export const fetchApi = (path: string, options: RequestInit): Promise<any> => {
  let status: number;
  return fetch(`${baseUrl}${path}`, {
    ...options,
    credentials: 'include',
  })
    .then(res => {
      status = res.status;
      const contentType = res.headers.get('content-type');

      if (contentType && contentType.indexOf('application/json') !== -1) {
        return res.json();
      }

      return res.text();
    })
    .then(res => {
      if (status > 199 && status < 299) return res;

      return Promise.reject(new Error(res.reason));
    });
};
