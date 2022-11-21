import React from 'react';

import stylesForm from 'src/components/Form/Form.module.scss';

import { LoginForm } from './LoginForm';
import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { BlankWindow } from 'src/components/BlankWindow';

export const LoginPage: React.FC = () => {
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
