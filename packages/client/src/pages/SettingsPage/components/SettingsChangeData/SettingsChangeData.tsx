import { useNavigate } from 'react-router-dom';

import { Button } from 'src/components/Button';
import { Form } from 'src/components/Form';
import { SettingsAvatar } from '../SettingsAvatar';
import { Input } from 'src/components/Input';

import stylesForm from 'src/components/Form/Form.module.scss';
import { useCallback } from 'react';

export const SettingsChangeData = () => {
  const navigate = useNavigate();

  const saveHandle = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <div>
      <SettingsAvatar />
      <Form
        buttons={
          <div>
            <div className={stylesForm.form_button_box}>
              <Button regular onClick={saveHandle}>
                Save
              </Button>
            </div>
          </div>
        }>
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
    </div>
  );
};
