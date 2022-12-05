import { Outlet } from 'react-router-dom';

import stylesForm from 'src/components/Form/Form.module.scss';
import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { BlankWindow } from 'src/components/BlankWindow';
import { TitleGame } from 'src/components/TitleGame';

export const AuthPage = () => {
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
