import React from 'react';
import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { Navigate } from 'react-router-dom';
import stylesForm from '../../components/Form/Form.module.scss';
import { useAppSelector } from '../../hooks/redux';
import { RegistrationForm } from './RegistrationForm';
import { BlankWindow } from 'src/components/BlankWindow';

export const RegistrationPage: React.FC = (): JSX.Element => {
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
        <RegistrationForm />
        </BlankWindow>
    </ErrorBoundary>
  );
};
