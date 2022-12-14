import {
  firstNameRules,
  loginRules,
  emailRules,
  phoneRules,
  secondNameRules,
  displayNameRules,
} from 'src/constants/ValidationRules';
import { object, string } from 'yup';

export const changeDataSchema = object().shape({
  first_name: string().required('Required').matches(firstNameRules, {
    message:
      'The first letter must be uppercase. Latin or Cyrillic letters, hyphens are allowed',
  }),
  second_name: string().required('Required').matches(secondNameRules, {
    message:
      'The first letter must be uppercase. Latin or Cyrillic letters, hyphens are allowed',
  }),
  display_name: string().required('Required').matches(displayNameRules, {
    message:
      'Must be from 8 to 40 characters. At least one capital letter and a number are required.',
  }),
  login: string().required('Required').matches(loginRules, {
    message:
      'Must be from 3 to 20 characters. Latin letters, digits (but not consisting of digits), hyphens and underscores are allowed',
  }),
  email: string().required('Required').matches(emailRules, {
    message: 'Please enter a valid email',
  }),
  phone: string().required('Required').matches(phoneRules, {
    message:
      'From 10 to 15 characters, consists of numbers, can start with a plus',
  }),
});
