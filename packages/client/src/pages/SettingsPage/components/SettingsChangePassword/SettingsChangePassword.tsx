import { useNavigate } from 'react-router-dom';

import { Button } from '../../../../components/Button';
import { Form } from '../../../../components/Form';
import { Input } from 'src/components/Input';

import stylesForm from '../../../../components/Form/Form.module.scss';

export const SettingsChangePassword = () => {
  const navigate = useNavigate();
  const saveHandle = () => {
    navigate(-1);
  };
  return (
    <div>
      <Form
        actions={
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
