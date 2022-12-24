import { defaultHeaders } from 'src/constants/http';
import { ITopic } from 'src/pages/Forum/part/Topic/types';
import { fetchApi } from 'src/store/utils';

export const getTopics = () => {
  return fetchApi<ITopic[]>(
    '/api/forum/topic',
    {
      credentials: 'include',
      method: 'GET',
      headers: {
        ...defaultHeaders,
        Accept: 'application/json',
      },
    },
    `${import.meta.env.VITE_SERVER}`);
};
