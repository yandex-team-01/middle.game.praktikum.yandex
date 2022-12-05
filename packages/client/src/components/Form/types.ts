import { FormikValues } from 'formik';
import { ReactNode } from 'react';
import { AnySchema } from 'yup';

export type Props = {
  children: ReactNode;
  buttonsBlock: ReactNode;
  onSubmit?: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
};

export type PropsGenericForm = {
  children?: ReactNode;
  buttonsBlock: ReactNode;

  initialValues: FormikValues;
  validationSchema: AnySchema;
  onSubmit: (values: FormikValues) => void;
};
