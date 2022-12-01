import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { Navigate } from 'react-router-dom';
import stylesForm from 'src/components/Form/Form.module.scss';
import { useAppSelector } from 'src/hooks/redux';
import { RegistrationForm } from './RegistrationForm';
import { BlankWindow } from 'src/components/BlankWindow';
import { selectAuth } from 'src/store/auth/AuthSelectors';
import { TitleGame } from 'src/components/TitleGame';

export const RegistrationPage = () => {
  const auth = useAppSelector(selectAuth);

  if (auth) {
    return <Navigate to="/" />;
  }

  return (
    <ErrorBoundary>
      <BlankWindow>
        <div className={stylesForm.form_block_title}>
          <TitleGame className={stylesForm.form_logo_title} />
        </div>
        <RegistrationForm />
      </BlankWindow>
    </ErrorBoundary>
  );
};
