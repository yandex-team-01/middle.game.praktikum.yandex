import { Navigate } from 'react-router-dom';
import { Props } from './types';

export const ProtectedRoute = ({ flag, redirect, children }: Props) => {
  if (!flag) {
    return <Navigate to={redirect} replace />;
  }

  return children;
};
