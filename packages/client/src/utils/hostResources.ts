import { env } from 'src/constants/Env';

export const hostResources = (path: string) => {
  return `${env.HOST_RESOURCES}${path}`;
};
