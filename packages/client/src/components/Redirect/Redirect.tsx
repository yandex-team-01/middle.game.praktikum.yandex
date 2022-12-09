import { useContext } from 'react';
import { HttpContext } from '../HttpProvider';
import { Navigate } from 'react-router-dom';

export type RedirectProps = {
  to: string;
};

export const Redirect = ({ to }: RedirectProps) => {
  const isSsr = import.meta.env.SSR;
  const ctx = useContext(HttpContext);

  if (!isSsr) {
    return <Navigate to={to} replace />;
  }

  if (ctx) {
    ctx.redirectLocation = to;
  }
  return null;
};
