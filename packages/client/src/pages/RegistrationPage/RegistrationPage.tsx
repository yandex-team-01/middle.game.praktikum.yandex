import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import stylesForm from '../../components/Form/Form.module.scss';
import { useAppSelector } from '../../hooks/redux';
import { RegistrationForm } from './RegistrationForm';

export const RegistrationPage: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const auth = useAppSelector(state => state.auth.auth);

  useEffect(() => {
    if (auth) {
      navigate('/');
    }
  }, [auth]);

  return (
    <div className={stylesForm.form_root}>
      <h1 className={stylesForm.form_logo_title}>
        Huggy Wuggy
        <br />& Kissy Missy
      </h1>
      <RegistrationForm />
    </div>
  );
};
