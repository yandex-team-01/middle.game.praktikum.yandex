import { TFunction } from 'i18next';
import { loginRules, passwordRules } from 'src/constants/ValidationRules';
import { object, string } from 'yup';

export const loginSchema = (translation: TFunction) => {
  const requiredMessage = String(translation('required'));

  return object().shape({
    login: string().required(requiredMessage).matches(loginRules, {
      message: translation('messageValidationLogin'),
    }),
    password: string().required(requiredMessage).matches(passwordRules, {
      message: translation('messageValidationPassword'),
    }),
  });
};
