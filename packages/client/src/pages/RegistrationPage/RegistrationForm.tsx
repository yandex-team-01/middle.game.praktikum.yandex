import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';

import { Input } from 'src/components/Input';
import { Button } from 'src/components/Button';
import { Form } from 'src/components/Form';
import { ErrorBoundary } from 'src/components/ErrorBoundary';

import stylesForm from 'src/components/Form/Form.module.scss';

import { regSchema, initialRegValuesSchema } from './RegistrationSchema';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { SignupData } from 'src/modules/IAuth';
import { fetchSignup } from 'src/store/auth/AuthActions';
import { selectLoading } from 'src/store/auth/AuthSelectors';
import {
  getLocalStorageItem,
  LocalStorageItems,
} from 'src/utils/getLocalStorageItem';

export const RegistrationForm = () => {
  const { t } = useTranslation();
  let lang = getLocalStorageItem(LocalStorageItems.Lang);
  const dispath = useAppDispatch();
  const loading = useAppSelector(selectLoading);

  const signupHandler = (values: SignupData) => {
    dispath(fetchSignup(values));
  };

  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: initialRegValuesSchema,
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
    <ErrorBoundary>
      <Form
        onSubmit={handleSubmit}
        buttonsBlock={
          <div>
            <div className={stylesForm.form_button_box}>
              <Button regular type="submit" disabled={loading}>
                {t('signUp')}
              </Button>
            </div>

            <Link
              to={`/${lang}/login`}
              className={stylesForm.form_sign_in_link}>
              {t('signIn')}
            </Link>
          </div>
        }>
        <Input
          label={t('firstName')}
          name="first_name"
          value={values.first_name}
          onChange={handleChange}
          onBlur={handleBlur}
          className="regular"
          showError={Boolean(errors.first_name) && Boolean(touched.first_name)}
          error={errors.first_name}
        />
        <Input
          label={t('secondName')}
          name="second_name"
          value={values.second_name}
          onChange={handleChange}
          onBlur={handleBlur}
          className="regular"
          showError={
            Boolean(errors.second_name) && Boolean(touched.second_name)
          }
          error={errors.second_name}
        />
        <Input
          label={t('phone')}
          name="phone"
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          className="regular"
          showError={Boolean(errors.phone) && Boolean(touched.phone)}
          error={errors.phone}
        />
        <Input
          label="Email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className="regular"
          showError={Boolean(errors.email) && Boolean(touched.email)}
          error={errors.email}
        />
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
        <Input
          label={t('passwordAgain')}
          name="repeatPassword"
          type="password"
          value={values.repeatPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          className="regular"
          showError={
            Boolean(errors.repeatPassword) && Boolean(touched.repeatPassword)
          }
          error={errors.repeatPassword}
        />
      </Form>
    </ErrorBoundary>
  );
};
