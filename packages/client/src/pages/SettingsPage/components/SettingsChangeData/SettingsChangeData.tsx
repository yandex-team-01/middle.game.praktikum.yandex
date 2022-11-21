import { useTranslation } from 'react-i18next';

import { Button } from 'src/components/Button';
import { Form } from 'src/components/Form';
import { SettingsAvatar } from '../SettingsAvatar';
import { Input } from 'src/components/Input';

import stylesForm from 'src/components/Form/Form.module.scss';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { fetchChangeUser } from 'src/store/users/UsersActions';
import { useFormik } from 'formik';
import { changeDataSchema } from './SettingsChangeDataSchema';
import { useNavigator } from 'src/hooks/useNavigator';
import { IUser } from 'src/modules/IUser';

export const SettingsChangeData = () => {
  const user = useAppSelector(state => state.auth.user!);

  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigator = useNavigator();

  const goBackHandle = () => navigator('/settings');

  const changeDataHandler = (values: IUser) => {
    dispatch(fetchChangeUser(values))
      .unwrap()
      .catch()
      .then(res => {
        goBackHandle();
      });
  };

  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: user,
      validationSchema: changeDataSchema,
      onSubmit: values => {
        changeDataHandler(values as IUser);
      },
    });

  return (
    <div>
      <SettingsAvatar />
      <Form
        onSubmit={handleSubmit}
        buttonsBlock={
          <div className={stylesForm.form_button_box}>
            <Button regular type="submit">
              {t('save')}
            </Button>
            <Button regular onClick={goBackHandle}>
              {t('goBack')}
            </Button>
          </div>
        }>
        <Input
          label={t('email')}
          name="email"
          type="email"
          className="regular"
          placeholder={user.email}
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          showError={Boolean(errors.email) && Boolean(touched.email)}
          error={errors.email}
        />
        <Input
          label={t('login')}
          name="login"
          type="text"
          className="regular"
          placeholder={user.login}
          value={values.login}
          onChange={handleChange}
          onBlur={handleBlur}
          showError={Boolean(errors.login) && Boolean(touched.login)}
          error={errors.login}
        />
        <Input
          label={t('nickname')}
          name="display_name"
          type="text"
          className="regular"
          placeholder={user.display_name}
          value={values.display_name}
          onChange={handleChange}
          onBlur={handleBlur}
          showError={
            Boolean(errors.display_name) && Boolean(touched.display_name)
          }
          error={errors.display_name}
        />
        <Input
          label={t('firstName')}
          name="first_name"
          type="text"
          className="regular"
          placeholder={user.first_name}
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
          placeholder={user.second_name}
          value={values.second_name}
          onChange={handleChange}
          onBlur={handleBlur}
          showError={
            Boolean(errors.second_name) && Boolean(touched.second_name)
          }
          error={errors.second_name}
        />
        <Input
          label={t('phone')}
          name="phone"
          type="text"
          className="regular"
          placeholder={user.phone}
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
