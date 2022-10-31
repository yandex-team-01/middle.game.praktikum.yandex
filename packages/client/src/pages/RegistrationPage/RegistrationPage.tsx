import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Form } from '../../components/Form';
import styles from './RegistrationPage.module.scss';
import stylesForm from '../../components/Form/Form.module.scss';

import { regSchema } from '../../constants/Schemas';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { SignupData } from '../../modules/IAuth';
import { fetchSignup } from '../../controllers/AuthController';

export const RegistrationPage: React.FC = (): JSX.Element => {
  const dispath = useAppDispatch();
  const navigate = useNavigate();
  const { auth, loading } = useAppSelector(state => state.authReducer);

  const signupHandler = (values: SignupData) => {
    dispath(fetchSignup(values));
  };

  useEffect(() => {
    if (auth) {
      navigate('/');
    }
  }, [auth]);

  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        first_name: '',
        second_name: '',
        phone: '',
        email: '',
        login: '',
        password: '',
        repeatPassword: '',
      },
      validationSchema: regSchema,
      onSubmit: values => {
        const data: SignupData = {
          first_name: values.first_name,
          second_name: values.second_name,
          phone: values.phone,
          email: values.email,
          login: values.login,
          password: values.password,
        };
        signupHandler(data);
      },
    });

  return (
    <div className={stylesForm.form_root}>
      <h1 className={stylesForm.form_logo_title}>
        Huggy Wuggy
        <br />& Kissy Missy
      </h1>
      <Form
        onSubmit={handleSubmit}
        actions={[
          <div key={0}>
            <div className={stylesForm.form_button_box}>
              <Button
                regular
                className="regular"
                type="submit"
                disabled={loading}>
                <h1 className={styles.reg_button_title}>Sign Up</h1>
              </Button>
            </div>

            <Link to="/login" className={stylesForm.form_sign_in_link}>
              Sign In
            </Link>
          </div>,
        ]}>
        <div>
          <h4 className={stylesForm.form_title}>First Name</h4>
          <Input
            name="first_name"
            value={values.first_name}
            onChange={handleChange}
            onBlur={handleBlur}
            className="regular"
            showError={!!errors.first_name && !!touched.first_name}
            error={errors.first_name}
          />
          <h4 className={stylesForm.form_title}>Second Name</h4>
          <Input
            name="second_name"
            value={values.second_name}
            onChange={handleChange}
            onBlur={handleBlur}
            className="regular"
            showError={!!errors.second_name && !!touched.second_name}
            error={errors.second_name}
          />
          <h4 className={stylesForm.form_title}>Phone</h4>
          <Input
            name="phone"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            className="regular"
            showError={!!errors.phone && !!touched.phone}
            error={errors.phone}
          />

          <h4 className={stylesForm.form_title}>Email</h4>
          <Input
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className="regular"
            showError={!!errors.email && !!touched.email}
            error={errors.email}
          />

          <h4 className={stylesForm.form_title}>Login</h4>
          <Input
            name="login"
            value={values.login}
            onChange={handleChange}
            onBlur={handleBlur}
            className="regular"
            showError={!!errors.login && !!touched.login}
            error={errors.login}
          />

          <h4 className={stylesForm.form_title}>Password</h4>
          <Input
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className="regular"
            showError={!!errors.password && !!touched.password}
            error={errors.password}
          />

          <h4 className={stylesForm.form_title}>Password</h4>
          <Input
            name="repeatPassword"
            type="password"
            value={values.repeatPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            className="regular"
            showError={!!errors.repeatPassword && !!touched.repeatPassword}
            error={errors.repeatPassword}
          />
        </div>
      </Form>
    </div>
  );
};
