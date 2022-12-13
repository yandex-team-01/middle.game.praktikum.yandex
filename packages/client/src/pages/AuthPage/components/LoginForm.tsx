import stylesForm from 'src/components/Form/Form.module.scss';
import { useTranslation } from 'react-i18next';

import { loginSchema, initialLoginValuesSchema } from './schema';
import { Button } from 'src/components/Button';
import { GenericForm } from 'src/components/Form';
import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { Nav } from 'src/components/Nav';

import { useAppSelector } from 'src/hooks/redux';
import { fetchSignin } from 'src/store/auth/AuthActions';
import { SigninData } from 'src/modules/IAuth';
import { selectLoading } from 'src/store/auth/AuthSelectors';
import { FormikValues } from 'formik';
import { useBoundAction } from 'src/hooks/useBoundAction';

export const LoginForm = () => {
  const { t } = useTranslation();
  const loading = useAppSelector(selectLoading);
  const onSubmit = useBoundAction((values: FormikValues) =>
    fetchSignin(values as SigninData)
  );

  return (
    <ErrorBoundary>
      <GenericForm
        initialValues={initialLoginValuesSchema}
        validationSchema={loginSchema(t)}
        onSubmit={onSubmit}
        buttonsBlock={
          <div className={stylesForm.form_button_box}>
            <Button regular type="submit" disabled={loading}>
              {t('signIn')}
            </Button>
            <Nav to="/auth/reg">{t('signUp')}</Nav>
          </div>
        }>
        <div className={stylesForm.reset_link}>
          <Nav to="/resetpassword">{t('resetPassword')}</Nav>
        </div>
      </GenericForm>
    </ErrorBoundary>
  );
};
