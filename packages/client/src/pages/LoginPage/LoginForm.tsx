import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';

import stylesForm from 'src/components/Form/Form.module.scss';

import { Input } from 'src/components/Input';
import { Button } from 'src/components/Button';
import { Form } from 'src/components/Form';
import { ErrorBoundary } from 'src/components/ErrorBoundary';

import { loginSchema } from './LoginSchema';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { fetchSignin } from 'src/store/auth/AuthActions';
import { SigninData } from 'src/modules/IAuth';
import { selectLoading } from 'src/store/auth/AuthSelectors';

export const LoginForm: React.FC = () => {
  const { t } = useTranslation();
  let lang = localStorage.getItem('i18nextLng');
  const dispath = useAppDispatch();
  const loading = useAppSelector(selectLoading);
  const signinHandler = (values: SigninData) => {
    dispath(fetchSignin(values));
  };

  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        login: '',
        password: '',
      },
      validationSchema: loginSchema,
      onSubmit: values => {
        signinHandler(values as SigninData);
      },
    });

  return (
    <ErrorBoundary>
      <Form
        onSubmit={handleSubmit}
        buttonsBlock={
          <div>
            <div className={stylesForm.form_button_box}>
              <Button
                regular
                type="submit"
                disabled={loading}
                onClick={() => {
                  console.log('submit');
                }}>
                {t('signIn')}
              </Button>
            </div>

            <Link to={`/${lang}/reg`} className={stylesForm.form_sign_in_link}>
            {t('signUp')}
            </Link>
          </div>
        }>
        <Input
          label={t('login')}
          name="login"
          value={values.login}
          onChange={handleChange}
          onBlur={handleBlur}
          className="regular"
          showError={Boolean(errors.login) && Boolean(touched.login)}
          error={errors.login}
        />

        <Input
          label={t('password')}
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          className="regular"
          showError={Boolean(errors.password) && Boolean(touched.password)}
          error={errors.password}
        />

        <Link to={`/${lang}/resetpassword`} className={stylesForm.form_pass_reset_link}>
        {t('resetPassword')}
        </Link>
      </Form>
    </ErrorBoundary>
  );
};
