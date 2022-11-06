import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Form } from '../../components/Form';
import { loginSchema } from '../../constants/Schemas';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchSignin } from '../../store/auth/AuthActions';
import { SigninData } from '../../modules/IAuth';

import stylesForm from '../../components/Form/Form.module.scss';
import { ErrorBoundary } from 'src/components/ErrorBoundary';

export const LoginForm: React.FC = (): JSX.Element => {
  const dispath = useAppDispatch();
  const loading = useAppSelector(state => state.auth.loading);
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
        actions={
          <div>
            <div className={stylesForm.form_button_box}>
              <Button regular type="submit" disabled={loading}>
                Sign in
              </Button>
            </div>

            <Link to="/reg" className={stylesForm.form_sign_in_link}>
              No acc? Sign up
            </Link>
          </div>}>
        <div>
          <Input
            label="Login"
            name="login"
            value={values.login}
            onChange={handleChange}
            onBlur={handleBlur}
            className="regular"
            showError={Boolean(errors.login) && Boolean(touched.login)}
            error={errors.login}
          />

          <Input
            label="Password"
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className="regular"
            showError={Boolean(errors.password) && Boolean(touched.password)}
            error={errors.password}
          />

          <a href="resetpassword" className={stylesForm.form_pass_reset_link}>
            forgot your password?
          </a>
        </div>
      </Form>
    </ErrorBoundary>
  );
};
