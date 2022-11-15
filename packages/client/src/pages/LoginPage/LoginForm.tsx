import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { Input } from 'src/components/Input';
import { Button } from 'src/components/Button';
import { Form } from 'src/components/Form';
import { loginSchema } from './LoginSchema';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { fetchSignin } from 'src/store/auth/AuthActions';
import { SigninData } from 'src/modules/IAuth';
import stylesForm from 'src/components/Form/Form.module.scss';
import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { selectLoading } from 'src/store/auth/AuthSelectors';

export const LoginForm: React.FC = () => {
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
          <div key={0}>
            <div className={stylesForm.form_button_box}>
              <Button
                regular
                type="submit"
                disabled={loading}
                onClick={() => {
                  console.log('submit');
                }}>
                Sign in
              </Button>
            </div>

            <Link to="/reg" className={stylesForm.form_sign_in_link}>
              No acc? Sign up
            </Link>
          </div>
        }>
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

        <Link to="/resetpassword" className={stylesForm.form_pass_reset_link}>
          forgot your password?
        </Link>
      </Form>
    </ErrorBoundary>
  );
};
