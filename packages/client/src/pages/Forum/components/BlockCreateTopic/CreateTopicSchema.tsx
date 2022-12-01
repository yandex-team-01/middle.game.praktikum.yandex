import { TFunction } from 'i18next';
import { object, string } from 'yup';

export const initialTopicValuesSchema = {
  name_topic: '',
  description_topic: '',
};

export const topicSchema = (translation: TFunction) => {
  const requiredMessage = String(translation('required'));

  return object().shape({
    name_topic: string().required(requiredMessage),
    description_topic: string().required(requiredMessage),
  });
};
