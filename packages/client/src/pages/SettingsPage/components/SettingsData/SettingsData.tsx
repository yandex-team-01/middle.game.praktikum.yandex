import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Button } from 'src/components/Button';
import { Form } from 'src/components/Form';
import { SettingsAvatar } from '../../components/SettingsAvatar';
import { SettingsUserInfo } from '../SettingsUserInfo';

import stylesForm from 'src/components/Form/Form.module.scss';

import { useNavigator } from 'src/hooks/useNavigator';

export const SettingsData = () => {
  const { t } = useTranslation();
  const navigator = useNavigator();

  const editHandle = () => navigator('edit');

  return (
    <div>
      <SettingsAvatar />
      <Form
        buttonsBlock={
          <div>
            <div className={stylesForm.form_button_box}>
              <Button regular type="submit" onClick={editHandle}>
                {t('editProfile')}
              </Button>
              <Link to="password" className={stylesForm.form_sign_in_link}>
                {t('changePassword')}
              </Link>
            </div>
          </div>
        }>
        <SettingsUserInfo />
      </Form>
    </div>
  );
};
