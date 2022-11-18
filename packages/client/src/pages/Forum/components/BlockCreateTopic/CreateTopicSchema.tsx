import { object, string } from 'yup';

export const initialRegValuesSchema = {
  name_topic: '',
  description_topic: '',
};

export const regSchema = object().shape({
  name_topic: string().required('Required'),
  description_topic: string().required('Required')
});
