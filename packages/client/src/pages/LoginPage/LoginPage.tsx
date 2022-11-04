import React from 'react';
import { Navigate } from 'react-router-dom';
import stylesForm from '../../components/Form/Form.module.scss';
import { LoginForm } from './LoginForm';

import { useAppSelector } from '../../hooks/redux';
import { ErrorBoundary } from 'src/components/ErrorBoundary';

export const LoginPage: React.FC = (): JSX.Element => {
  const auth = useAppSelector(state => state.auth.auth);

  if (auth) {
    return <Navigate to="/" />;
  }

  return (
    <ErrorBoundary>
      <div className={stylesForm.form_root}>
        <h1 className={stylesForm.form_logo_title}>
          Huggy Wuggy
          <br />& Kissy Missy
        </h1>
        <LoginForm />
      </div>
    </ErrorBoundary>
  );
};
