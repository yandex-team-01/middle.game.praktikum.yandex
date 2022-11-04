import React from 'react';
import { Button } from '../../../../components/Button';
import { Form } from '../../../../components/Form';
import { SettingsAvatar } from '../SettingsAvatar';
import { Input } from 'src/components/Input';

import styles from '../../SettingsPage.module.scss';
import stylesForm from '../../../../components/Form/Form.module.scss';

export const SettingsChangePassword = () => {
  return (
    <>
      <Form
        actions={[
          <div key={0}>
            <div className={stylesForm.form_button_box}>
              <Button regular type="submit">
                <h1 className={styles.login_button_title}>Save</h1>
              </Button>
            </div>
          </div>,
        ]}>
        <div className={stylesForm.form_center}>
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
        </div>
      </Form>
    </>
  );
};
