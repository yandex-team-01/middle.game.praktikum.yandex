import { TFunction } from 'i18next';
import {
  firstNameRules,
  loginRules,
  emailRules,
  passwordRules,
  phoneRules,
  secondNameRules,
} from 'src/constants/ValidationRules';
import { object, ref, string } from 'yup';

export const initialLoginValuesSchema = {
  login: '',
  password: '',
};

export const loginSchema = (translation: TFunction) => {
  const requiredMessage = String(translation('required'));

  return object().shape({
    login: string()
      .required(requiredMessage)
      .matches(loginRules, {
        message: translation('messageValidationLogin'),
      }),
    password: string()
      .required(requiredMessage)
      .matches(passwordRules, {
        message: translation('messageValidationPassword'),
      }),
  });
};

export const initialRegValuesSchema = {
  first_name: '',
  second_name: '',
  phone: '',
  email: '',
  login: '',
  password: '',
  repeatPassword: '',
};

export const regSchema = (translation: TFunction) => {
  const requiredMessage = String(translation('required'));

  return object().shape({
    first_name: string()
      .required(requiredMessage)
      .matches(firstNameRules, {
        message: translation('messageValidationName'),
      }),
    second_name: string()
      .required(requiredMessage)
      .matches(secondNameRules, {
        message: translation('messageValidationName'),
      }),
    phone: string()
      .required(requiredMessage)
      .matches(phoneRules, {
        message: translation('messageValidationPhone'),
      }),
    email: string()
      .required(requiredMessage)
      .matches(emailRules, {
        message: translation('messageValidationEmail'),
      }),
    login: string()
      .required(requiredMessage)
      .matches(loginRules, {
        message: translation('messageValidationLogin'),
      }),
    password: string()
      .required(requiredMessage)
      .matches(passwordRules, {
        message: translation('messageValidationPassword'),
      }),
    repeatPassword: string()
      .oneOf(
        [ref('password'), null],
        String(translation('messageValidationRepeatPassword'))
      )
      .required(requiredMessage),
  });
};
