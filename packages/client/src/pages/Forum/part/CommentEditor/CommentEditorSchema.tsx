import { TFunction } from 'i18next';
import { object, string } from 'yup';

export const initialCommentValuesSchema = {
  comment: '',
};

export const commentSchema = (translation: TFunction) => {
  const requiredMessage = String(translation('required'));

  return object().shape({
    comment: string().required(requiredMessage),
  });
};
