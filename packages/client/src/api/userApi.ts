import { defaultHeaders } from 'src/constants/http';
import { IUserWithTheme } from 'src/modules/IUser';
import { fetchApi } from 'src/store/utils';

export const getOrCreateUser = (id: number, data: IUserWithTheme) => {
  return fetchApi(
    `/user/${id}`,
    {
      method: 'POST',
      headers: defaultHeaders,
      credentials: 'include',
      body: JSON.stringify(data),
    },
    'https://localhost:3001/api'
  );
};
