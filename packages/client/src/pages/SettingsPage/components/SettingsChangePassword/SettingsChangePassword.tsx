import { useTranslation } from 'react-i18next';

import { Button } from 'src/components/Button';
import { Form } from 'src/components/Form';
import { Input } from 'src/components/Input';

import stylesForm from 'src/components/Form/Form.module.scss';

import { useNavigator } from 'src/hooks/useNavigator';
import { useAppDispatch } from 'src/hooks/redux';
import { ChangePasswordData } from 'src/modules/IUsers';
import { fetchChangePassword } from 'src/store/users/UsersActions';
import { changePasswordSchema } from 'src/constants/Schemas';
import { useFormik } from 'formik';

export const SettingsChangePassword = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const navigator = useNavigator();

  
  const saveHandle = () => navigator(-1);
  
  const changePasswordHandler = (values: ChangePasswordData) => {
    dispatch(fetchChangePassword(values)).then(() => saveHandle());
  };
  
  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        oldPassword: '',
        newPassword: '',
        repeatPassword: '',
      },
      validationSchema: changePasswordSchema,
      onSubmit: values => {
        changePasswordHandler(values as ChangePasswordData);
      },
    });

  return (
    <div>
      <Form
        onSubmit={handleSubmit}
        buttonsBlock={
          <div>
            <div className={stylesForm.form_button_box}>
              <Button regular type="submit">
                {t('save')}
              </Button>
            </div>
          </div>
        }>
        // TODO: change dummy functions
        <Input
          label={t('oldPassword')}
          name="oldPassword"
          type="password"
          className="regular"
          value={values.oldPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          showError={Boolean(errors.oldPassword) && Boolean(touched.oldPassword)}
          error={errors.oldPassword}
        />
        <Input
          label={t('newPassword')}
          name="newPassword"
          type="password"
          className="regular"
          value={values.newPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          showError={Boolean(errors.newPassword) && Boolean(touched.newPassword)}
          error={errors.newPassword}
        />
        <Input
          label={t('newPasswordAgain')}
          name="repeatPassword"
          type="password"
          className="regular"
          value={values.repeatPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          showError={Boolean(errors.repeatPassword) && Boolean(touched.repeatPassword)}
          error={errors.repeatPassword}
        />
      </Form>
    </div>
  );
};
