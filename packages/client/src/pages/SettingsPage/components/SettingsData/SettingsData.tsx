import { useNavigate, Link } from 'react-router-dom';

import { Button } from '../../../../components/Button';
import { Form } from '../../../../components/Form';
import { SettingsAvatar } from '../../components/SettingsAvatar';
import { SettingsUserInfo } from '../SettingsUserInfo';

import stylesForm from '../../../../components/Form/Form.module.scss';

export const SettingsData = () => {
  const navigate = useNavigate();
  const editHandle = () => {
    navigate('edit');
  };
  return (
    <div>
      <SettingsAvatar />
      <Form
        actions={
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
