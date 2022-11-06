import { useNavigate, Link } from 'react-router-dom';

import { Button } from 'src/components/Button';
import { Form } from 'src/components/Form';
import { SettingsAvatar } from '../../components/SettingsAvatar';
import { SettingsUserInfo } from '../SettingsUserInfo';

import stylesForm from 'src/components/Form/Form.module.scss';
import { useCallback } from 'react';

export const SettingsData = () => {
  const navigate = useNavigate();

  const editHandle = useCallback(() => {
    navigate('edit');
  }, [navigate]);

  return (
    <div>
      <SettingsAvatar />
      <Form
        buttons={
          <div>
            <div className={stylesForm.form_button_box}>
              <Button regular type="submit" onClick={editHandle}>
                Edit profile
              </Button>
              <Link to="password" className={stylesForm.form_sign_in_link}>
                Change password
              </Link>
            </div>
          </div>
        }>
        <SettingsUserInfo />
      </Form>
    </div>
  );
};
