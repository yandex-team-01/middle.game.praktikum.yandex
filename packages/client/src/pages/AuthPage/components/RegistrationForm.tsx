import stylesForm from 'src/components/Form/Form.module.scss';

import { useTranslation } from 'react-i18next';
import { FormikValues } from 'formik';

import { regSchema, initialRegValuesSchema } from './schema';
import { Button } from 'src/components/Button';
import { FormikForm } from 'src/components/Form';
import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { Nav } from 'src/components/Nav';

import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { SignupData } from 'src/modules/IAuth';
import { fetchSignup } from 'src/store/auth/AuthActions';
import { selectLoading } from 'src/store/auth/AuthSelectors';

export const RegistrationForm = () => {
  const { t } = useTranslation();
  const dispath = useAppDispatch();
  const loading = useAppSelector(selectLoading);

  const signupHandler = (values: FormikValues) => {
    dispath(fetchSignup(values as SignupData));
  };

  return (
    <ErrorBoundary>
      <FormikForm
        initialValues={initialRegValuesSchema}
        validationSchema={regSchema(t)}
        submitHandler={signupHandler}
        buttonsBlock={
          <div className={stylesForm.form_button_box}>
            <Button regular type="submit" disabled={loading}>
              {t('signUp')}
            </Button>
            <Nav to="/auth/">{t('signIn')}</Nav>
          </div>
        }></FormikForm>
    </ErrorBoundary>
  );
};
