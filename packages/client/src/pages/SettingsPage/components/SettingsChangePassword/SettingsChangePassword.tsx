import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from 'src/components/Button';
import { Form } from 'src/components/Form';
import { Input } from 'src/components/Input';

import stylesForm from 'src/components/Form/Form.module.scss';

export const SettingsChangePassword = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const saveHandle = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <div>
      <Form
        buttonsBlock={
          <div>
            <div className={stylesForm.form_button_box}>
              <Button regular onClick={saveHandle}>
                {t('save')}
              </Button>
            </div>
          </div>
        }>
        // TODO: change dummy functions
        <Input
          label={t('oldPassword')}
          name="old-password"
          type="password"
          className="regular"
          onChange={() => {
            console.log('change');
          }}
        />
        <Input
          label={t('newPassword')}
          name="new-password"
          type="password"
          className="regular"
          onChange={() => {
            console.log('change');
          }}
        />
        <Input
          label={t('newPasswordAgain')}
          name="again-password"
          type="password"
          className="regular"
          onChange={() => {
            console.log('change');
          }}
        />
      </Form>
    </div>
  );
};
