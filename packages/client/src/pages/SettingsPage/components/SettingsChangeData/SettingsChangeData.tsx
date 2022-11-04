import { useNavigate } from 'react-router-dom';

import { Button } from '../../../../components/Button';
import { Form } from '../../../../components/Form';
import { SettingsAvatar } from '../SettingsAvatar';
import { Input } from 'src/components/Input';

import styles from '../../SettingsPage.module.scss';
import stylesForm from '../../../../components/Form/Form.module.scss';

export const SettingsChangeData = () => {
  let navigate = useNavigate();
  return (
    <>
      <SettingsAvatar />
      <Form
        actions={[
          <div key={0}>
            <div className={stylesForm.form_button_box}>
              <Button regular onClick={() => navigate(-1)}>
                Save
              </Button>
            </div>
          </div>,
        ]}>
        <Input label="Email" name="email" type="email" className="regular" />
        <Input label="Login" name="login" type="text" className="regular" />
        <Input label="Nick" name="nickname" type="text" className="regular" />
        <Input label="First Name" name="name" type="text" className="regular" />
        <Input
          label="Second Name"
          name="surname"
          type="text"
          className="regular"
        />
        <Input label="Phone" name="phone" type="text" className="regular" />
      </Form>
    </>
  );
};
