import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import stylesForm from 'src/components/Form/Form.module.scss';
import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { BlankWindow } from 'src/components/BlankWindow';
import { TitleGame } from 'src/components/TitleGame';
import { useAppSelector } from 'src/hooks/redux';
import { selectAuth } from 'src/store/auth/AuthSelectors';

export const AuthPage = () => {
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
        <Outlet />
      </BlankWindow>
    </ErrorBoundary>
  );
};
