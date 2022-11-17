import { useTranslation } from 'react-i18next';

import { Button } from 'src/components/Button';
import { Form } from 'src/components/Form';
import { Input } from 'src/components/Input';

import stylesForm from 'src/components/Form/Form.module.scss';

import { useNavigator } from 'src/hooks/useNavigator';

export const SettingsChangePassword = () => {
  const { t } = useTranslation();
  const navigator = useNavigator();

  const saveHandle = () => navigator(-1)

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
