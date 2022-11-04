import React from 'react';
import { Navigate } from 'react-router-dom';
import stylesForm from 'src/components/Form/Form.module.scss';
import { LoginForm } from './LoginForm';

import { useAppSelector } from 'src/hooks/redux';
import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { BlankWindow } from 'src/components/BlankWindow';

export const LoginPage: React.FC = (): JSX.Element => {
  const auth = useAppSelector(state => state.auth.auth);

  if (auth) {
    return <Navigate to="/" />;
  }

  return (
    <ErrorBoundary>
      <BlankWindow>
        <div className={stylesForm.form_block_title}>
          <h1 className={stylesForm.form_logo_title}>
            Huggy Wuggy
            <br />& Kissy Missy
          </h1>
        </div>
        <LoginForm />
      </BlankWindow>
    </ErrorBoundary>
  );
};
