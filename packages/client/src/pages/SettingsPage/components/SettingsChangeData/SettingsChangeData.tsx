import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from 'src/components/Button';
import { Form } from 'src/components/Form';
import { SettingsAvatar } from '../SettingsAvatar';
import { Input } from 'src/components/Input';

import stylesForm from 'src/components/Form/Form.module.scss';

export const SettingsChangeData = () => {
  const { t } = useTranslation();
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
                {t('save')}
              </Button>
            </div>
          </div>
        }>
        <Input label="Email" name="email" type="email" className="regular" />
        <Input label={t('login')} name="login" type="text" className="regular" />
        <Input label={t('nickname')} name="nickname" type="text" className="regular" />
        <Input label={t('firstName')} name="name" type="text" className="regular" />
        <Input
          label={t('secondName')}
          name="surname"
          type="text"
          className="regular"
        />
        <Input label={t('phone')} name="phone" type="text" className="regular" />
      </Form>
    </div>
  );
};
