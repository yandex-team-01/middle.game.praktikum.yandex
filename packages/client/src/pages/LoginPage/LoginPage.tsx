import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import stylesForm from '../../components/Form/Form.module.scss';
import { LoginForm } from './LoginForm';

import { useAppSelector } from '../../hooks/redux';

export const LoginPage: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const auth = useAppSelector(state => state.auth.auth);

  useEffect(() => {
    if (auth) {
      navigate('/');
    }
  }, [auth, navigate]);

  return (
    <div className={stylesForm.form_root}>
      <h1 className={stylesForm.form_logo_title}>
        Huggy Wuggy
        <br />& Kissy Missy
      </h1>
      <LoginForm />
    </div>
  );
};
