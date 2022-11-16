import { useTranslation } from 'react-i18next';

import { Button } from 'src/components/Button';
import { Form } from 'src/components/Form';
import { SettingsAvatar } from '../../components/SettingsAvatar';
import { SettingsUserInfo } from '../SettingsUserInfo';

import stylesForm from 'src/components/Form/Form.module.scss';

import { useNavigator } from 'src/hooks/useNavigator';
import { Nav } from 'src/components/Nav';

export const SettingsData = () => {
  const { t } = useTranslation();
  const navigator = useNavigator();

  const editHandle = () => navigator('edit');

  return (
    <div>
      <SettingsAvatar />
      <Form
        buttonsBlock={
            <div className={stylesForm.form_button_box}>
              <Button regular type="submit" onClick={editHandle}>
                {t('editProfile')}
              </Button>
              <Nav to="password">{t('changePassword')}</Nav>
            </div>
        }>
        <SettingsUserInfo />
      </Form>
    </div>
  );
};
