import {
  firstNameRules,
  loginRules,
  passwordRules,
  phoneRules,
  secondNameRules,
} from 'src/constants/ValidationRules';
import { object, ref, string } from 'yup';

export const initialRegValuesSchema = {
  first_name: '',
  second_name: '',
  phone: '',
  email: '',
  login: '',
  password: '',
  repeatPassword: '',
};

export const regSchema = object().shape({
  first_name: string().required('Required').matches(firstNameRules, {
    message:
      'The first letter must be uppercase. Latin or Cyrillic letters, hyphens are allowed',
  }),
  second_name: string().required('Required').matches(secondNameRules, {
    message:
      'The first letter must be uppercase. Latin or Cyrillic letters, hyphens are allowed',
  }),
  phone: string().required('Required').matches(phoneRules, {
    message:
      'From 10 to 15 characters, consists of numbers, can start with a plus',
  }),

  email: string().email('Please enter a valid email').required('Required'),
  login: string().required('Required').matches(loginRules, {
    message:
      'Must be from 3 to 20 characters. Latin letters, digits (but not consisting of digits), hyphens and underscores are allowed',
  }),
  password: string().required('Required').matches(passwordRules, {
    message:
      'Must be from 8 to 40 characters. At least one capital letter and a number are required.',
  }),
  repeatPassword: string()
    .oneOf([ref('password'), null], 'Passwords must match')
    .required('Required'),
});
