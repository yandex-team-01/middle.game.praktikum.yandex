import { defaultHeaders } from 'src/constants/http';

import { fetchApi } from 'src/store/utils';

export const updateTheme = (data: { id: number; theme: string }) => {
  return fetchApi(
    '/user/theme',
    {
      method: 'POST',
      headers: defaultHeaders,
      credentials: 'include',
      body: JSON.stringify(data),
    },
    `${import.meta.env.VITE_SERVER}`
  );
};
