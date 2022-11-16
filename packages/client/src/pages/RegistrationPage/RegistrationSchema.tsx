import {
  firstNameRules,
  loginRules,
  passwordRules,
  phoneRules,
  secondNameRules,
} from 'src/constants/ValidationRules';
import { object, ref, string } from 'yup';

const loginRules = /^(?=.*[A-Za-z])[0-9A-Za-z_-]{3,20}$/;
const passwordRules = /^(?=.*[A-ZА-Я])(?=.*[0-9]).{10,}$/;
const firstNameRules = /(^[A-ZА-Я])([A-ZА-Яa-zа-я-]+)/;
const displayNameRules = /^(?=.*[A-Za-z])[0-9A-Za-z_-]{3,20}$/;
const secondNameRules = /(^[A-ZА-Я])([A-ZА-Яa-zа-я-]+)/;
const phoneRules = /(^[+]*)([0-9]{10,15})/;
const emailRules = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export const loginSchema = object().shape({
  login: string().required('Required').matches(loginRules, {
    message:
      'Must be from 3 to 20 characters. Latin letters, digits (but not consisting of digits), hyphens and underscores are allowed',
  }),
  password: string().required('Required').matches(passwordRules, {
    message:
      'Must be from 8 to 40 characters. At least one capital letter and a number are required.',
  }),
});

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
    message:
      'Invalid email address. Valid e-mail can contain only latin letters, numbers, @ and .',
  }),
  phone: string().required('Required').matches(phoneRules, {
    message:
      'From 10 to 15 characters, consists of numbers, can start with a plus',
  }),
});

export const changePasswordSchema = object().shape({
  oldPassword: string().required('Required').matches(passwordRules, {
    message:
      'Must be from 8 to 40 characters. At least one capital letter and a number are required.',
  }),
  newPassword: string().required('Required').matches(passwordRules, {
    message:
      'Must be from 8 to 40 characters. At least one capital letter and a number are required.',
  }),
  repeatPassword: string()
    .oneOf([ref('newPassword'), null], 'Passwords must match')
    .required('Required'),
});
