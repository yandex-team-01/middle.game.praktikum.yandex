import React from 'react';
import stylesForm from 'src/components/Form/Form.module.scss';
import { LoginForm } from './LoginForm';
import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { BlankWindow } from 'src/components/BlankWindow';
import { TitleGame } from 'src/components/TitleGame';

export const LoginPage: React.FC = () => {
  return (
    <ErrorBoundary>
      <BlankWindow>
        <div className={stylesForm.form_block_title}>
          <TitleGame className={stylesForm.form_logo_title} />
        </div>
        <LoginForm />
      </BlankWindow>
    </ErrorBoundary>
  );
};
