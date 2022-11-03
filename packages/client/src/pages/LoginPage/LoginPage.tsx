import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import stylesForm from '../../components/Form/Form.module.scss';
import { LoginForm } from './LoginForm';

import { useAppSelector } from '../../hooks/redux';
import { RootState } from 'src/store/store';
import { ErrorBoundary } from 'src/components/ErrorBoundary';

export const LoginPage: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const auth = useAppSelector((state: RootState) => state.auth.auth);

  useEffect(() => {
    if (auth) {
      navigate('/');
    }
  }, [auth, navigate]);

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
