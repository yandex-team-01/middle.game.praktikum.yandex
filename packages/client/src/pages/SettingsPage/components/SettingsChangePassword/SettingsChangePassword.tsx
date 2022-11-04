import { useNavigate } from 'react-router-dom';

import { Button } from '../../../../components/Button';
import { Form } from '../../../../components/Form';
import { SettingsAvatar } from '../SettingsAvatar';
import { Input } from 'src/components/Input';

import styles from '../../SettingsPage.module.scss';
import stylesForm from '../../../../components/Form/Form.module.scss';

export const SettingsChangePassword = () => {
  let navigate = useNavigate();
  return (
    <>
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
    </>
  );
};
