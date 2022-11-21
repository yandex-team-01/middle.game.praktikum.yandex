import { passwordRules } from 'src/constants/ValidationRules';
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
