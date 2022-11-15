import { useNavigate } from 'react-router-dom';

import { Button } from 'src/components/Button';
import { Form } from 'src/components/Form';
import { SettingsAvatar } from '../SettingsAvatar';
import { Input } from 'src/components/Input';

import stylesForm from 'src/components/Form/Form.module.scss';
import { useCallback } from 'react';

export const SettingsChangeData = () => {
  const navigate = useNavigate();

  const handleSave = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <div>
      <SettingsAvatar />
      <Form
        buttonsBlock={
          <div>
            <div className={stylesForm.form_button_box}>
              <Button regular onClick={handleSave}>
                Save
              </Button>
            </div>
          </div>
        }>
        //TODO: change dummy functions
        <Input
          label="Email"
          name="email"
          type="email"
          className="regular"
          onChange={() => {
            console.log('change');
          }}
        />
        <Input
          label="Login"
          name="login"
          type="text"
          className="regular"
          onChange={() => {
            console.log('change');
          }}
        />
        <Input
          label="Nick"
          name="nickname"
          type="text"
          className="regular"
          onChange={() => {
            console.log('change');
          }}
        />
        <Input
          label="First Name"
          name="name"
          type="text"
          className="regular"
          onChange={() => {
            console.log('change');
          }}
        />
        <Input
          label="Second Name"
          name="surname"
          type="text"
          className="regular"
          onChange={() => {
            console.log('change');
          }}
        />
        <Input
          label="Phone"
          name="phone"
          type="text"
          className="regular"
          onChange={() => {
            console.log('change');
          }}
        />
      </Form>
    </div>
  );
};
