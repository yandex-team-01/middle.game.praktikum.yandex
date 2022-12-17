import stylesForm from 'src/components/Form/Form.module.scss';
import { useTranslation } from 'react-i18next';
import { regSchema, initialRegValuesSchema } from './schema';
import { Button } from 'src/components/Button';
import { GenericForm } from 'src/components/Form';
import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { Nav } from 'src/components/Nav';
import { useAppSelector } from 'src/hooks/redux';
import { SignupData } from 'src/modules/IAuth';
import { fetchSignup } from 'src/store/auth/AuthActions';
import { selectLoading } from 'src/store/auth/AuthSelectors';
import { useBoundAction } from 'src/hooks/useBoundAction';
import { FunctionComponent } from 'react';

export const RegistrationForm: FunctionComponent<SignupData> = () => {
  const { t } = useTranslation();
  const loading = useAppSelector(selectLoading);

  const onSubmit = useBoundAction((values) =>
    fetchSignup(values)
  );

  return (
    <ErrorBoundary>
      <GenericForm
        initialValues={initialRegValuesSchema}
        validationSchema={regSchema(t)}
        onSubmit={onSubmit}
        buttonsBlock={
          <div className={stylesForm.form_button_box}>
            <Button regular type="submit" disabled={loading}>
              {t('signUp')}
            </Button>
            <Nav to="/auth/">{t('signIn')}</Nav>
          </div>
        }></GenericForm>
    </ErrorBoundary>
  );
};
