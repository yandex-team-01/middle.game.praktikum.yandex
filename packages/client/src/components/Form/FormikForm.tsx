import styles from './Form.module.scss';

import { ErrorBoundary } from '../ErrorBoundary';
import { Input } from '../Input';

import { PropsFormikForm } from './types';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';

export const FormikForm = ({
  children,
  buttonsBlock,

  initialValues,
  validationSchema,
  submitHandler,
}: PropsFormikForm) => {
  const { t } = useTranslation();

  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik({
      initialValues: initialValues,
      validationSchema: validationSchema,
      onSubmit: values => {
        submitHandler(values);
      },
    });

  return (
    <ErrorBoundary>
      <form onSubmit={handleSubmit}>
        <div>
          <div className={styles.form_group}>
            <div className={styles.form_inputs_buttons}>
              {Object.keys(initialValues).map((item, index) => (
                <Input
                  label={t(item)}
                  name={item}
                  value={values[item]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="regular"
                  key={index}
                  showError={Boolean(errors[item]) && Boolean(touched[item])}
                  error={errors[item] as string}
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
