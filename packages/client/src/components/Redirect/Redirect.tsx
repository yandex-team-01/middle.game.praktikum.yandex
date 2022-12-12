import { useContext } from 'react';
import { HttpContext } from '../HttpProvider';
import { Navigate } from 'react-router-dom';
import { getEnvSsrAndProd } from 'src/utils/getEnvSsrAndProd';

export type RedirectProps = {
  to: string;
};

export const Redirect = ({ to }: RedirectProps) => {
  const env = getEnvSsrAndProd();
  const ctx = useContext(HttpContext);

  if (!env.isSSR) {
    return <Navigate to={to} replace />;
  }

  if (ctx) {
    ctx.redirectLocation = to;
  }
  return null;
};
