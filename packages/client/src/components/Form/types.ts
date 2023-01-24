import { FormikValues } from 'formik';
import { ReactNode } from 'react';
import { AnySchema } from 'yup';
import { SigninData, SignupData } from 'src/modules/IAuth';

export type Props = {
  children: ReactNode;
  buttonsBlock: ReactNode;
  onSubmit?: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
};

export type PropsGenericForm = {
  children?: ReactNode;
  buttonsBlock: ReactNode;
  initialValues: FormikValues;
  typesValues: FormikValues;
  validationSchema: AnySchema;
  onSubmit: (values: SigninData | SignupData) => void;
};
