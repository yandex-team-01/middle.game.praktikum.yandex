import { useTranslation } from 'react-i18next';

import { Button } from 'src/components/Button';
import { Form } from 'src/components/Form';
import { SettingsAvatar } from '../SettingsAvatar';
import { Input } from 'src/components/Input';

import stylesForm from 'src/components/Form/Form.module.scss';
import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { fetchAuth } from 'src/store/auth/AuthActions';
import { UserData } from 'src/modules/IUsers';
import { fetchChangeUser } from 'src/store/users/UsersActions';
import { useFormik } from 'formik';
import { changeDataSchema } from 'src/constants/Schemas';

export const SettingsChangeData = () => {
  const user = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAuth());
  }, [dispatch]);

  const changeDataHandler = (values: UserData) => {
    dispatch(fetchChangeUser(values)).then(() => dispatch(fetchAuth()));
  };

  const { t } = useTranslation();
  const navigator = useNavigator();
  const handleSave = () => navigator(-1);

  return (
    <div>
      <SettingsAvatar />
      <Form
        onSubmit={handleSubmit}
        buttonsBlock={
          <div>
            <div className={stylesForm.form_button_box}>
              <Button regular type="submit">
                Save
              </Button>
            </div>
          </div>
        }>
        <Input
          label="Email"
          name="email"
          type="email"
          className="regular"
          placeholder={email}
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          showError={Boolean(errors.email) && Boolean(touched.email)}
          error={errors.email}
        />
        <Input
          label="Login"
          name="login"
          type="text"
          className="regular"
          placeholder={login}
          value={values.login}
          onChange={handleChange}
          onBlur={handleBlur}
          showError={Boolean(errors.login) && Boolean(touched.login)}
          error={errors.login}
        />
        <Input
          label="Nick"
          name="display_name"
          type="text"
          className="regular"
          placeholder={display_name}
          value={values.display_name}
          onChange={handleChange}
          onBlur={handleBlur}
          showError={
            Boolean(errors.display_name) && Boolean(touched.display_name)
          }
          error={errors.display_name}
        />
        <Input
          label="First Name"
          name="first_name"
          type="text"
          className="regular"
          placeholder={first_name}
          value={values.first_name}
          onChange={handleChange}
          onBlur={handleBlur}
          showError={Boolean(errors.first_name) && Boolean(touched.first_name)}
          error={errors.first_name}
        />
        <Input
          label={t('secondName')}
          name="second_name"
          type="text"
          className="regular"
          placeholder={second_name}
          value={values.second_name}
          onChange={handleChange}
          onBlur={handleBlur}
          showError={
            Boolean(errors.second_name) && Boolean(touched.second_name)
          }
          error={errors.second_name}
        />
        <Input
          label="Phone"
          name="phone"
          type="text"
          className="regular"
          placeholder={phone}
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          showError={Boolean(errors.phone) && Boolean(touched.phone)}
          error={errors.phone}
        />
      </Form>
    </div>
  );
};
