import { useNavigate } from 'react-router-dom';

import { Button } from 'src/components/Button';
import { Form } from 'src/components/Form';
import { Input } from 'src/components/Input';

import stylesForm from 'src/components/Form/Form.module.scss';
import { useCallback } from 'react';

export const SettingsChangePassword = () => {
  const navigate = useNavigate();

  const saveHandle = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <div>
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
        <Input
          label="Old password"
          name="old-password"
          type="password"
          className="regular"
        />
        <Input
          label="New password"
          name="new-password"
          type="password"
          className="regular"
        />
        <Input
          label="New password again"
          name="again-password"
          type="password"
          className="regular"
        />
      </Form>
    </div>
  );
};
