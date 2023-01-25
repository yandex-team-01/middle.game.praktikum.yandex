import styles from './Form.module.scss';

import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { Input } from 'src/components/Input';

import { PropsGenericForm } from './types';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';

export const GenericForm = ({
  children,
  buttonsBlock,
  initialValues,
  validationSchema,
  typesValues,
  onSubmit,
}: PropsGenericForm) => {
  const { t } = useTranslation();

  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: initialValues,
      validationSchema: validationSchema,
      onSubmit: onSubmit,
    });

  return (
    <ErrorBoundary>
      <form onSubmit={handleSubmit}>
        <div>
          <div className={styles.form_group}>
            <div className={styles.form_inputs_buttons}>
              {Object.keys(initialValues).map((item, index) => (
                <Input
                  type={typesValues[item]}
                  label={t(item)}
                  name={item}
                  value={values[item]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="regular"
                  key={index}
                  showError={Boolean(errors[item]) && Boolean(touched[item])}
                  error={String(errors[item])}
                />
              ))}
              {children}
              <div className={styles.form_buttons}>{buttonsBlock}</div>
            </div>
          </div>
        </div>
      </form>
    </ErrorBoundary>
  );
};
