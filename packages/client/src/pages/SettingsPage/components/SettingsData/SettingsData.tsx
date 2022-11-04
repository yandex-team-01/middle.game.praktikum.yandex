import { useNavigate, Link } from 'react-router-dom';

import { Button } from '../../../../components/Button';
import { Form } from '../../../../components/Form';
import { SettingsAvatar } from '../../components/SettingsAvatar';

import styles from '../../SettingsPage.module.scss';
import stylesForm from '../../../../components/Form/Form.module.scss';

export const SettingsData = () => {
  let navigate = useNavigate();
  return (
    <>
      <SettingsAvatar />
      <Form
        actions={[
          <div key={0}>
            <div className={stylesForm.form_button_box}>
              <Button
                regular
                type="submit"
                onClick={() => {
                  navigate('edit');
                }}>
                Edit profile
              </Button>
              <Link to="password" className={stylesForm.form_sign_in_link}>
                Change password
              </Link>
            </div>
          </div>,
        ]}>
        <div className={stylesForm.form_center}>
          <p className={stylesForm.form_title}>ivanov@ivan.ru</p>
          <p className={stylesForm.form_title}>jack_london</p>
          <p className={stylesForm.form_title}>Jack</p>
          <p className={stylesForm.form_title}>Martin</p>
          <p className={stylesForm.form_title}>+3123456789</p>
        </div>
      </Form>
    </>
  );
};
