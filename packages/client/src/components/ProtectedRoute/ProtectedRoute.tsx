import { Props } from './types';
import { Redirect } from 'src/components/Redirect';

export const ProtectedRoute = ({ flag, redirect, children }: Props) => {
  if (!flag) {
    return <Redirect to={redirect} />;
  }

  return children;
};
