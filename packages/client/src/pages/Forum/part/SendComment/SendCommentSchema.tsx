import { object, string } from 'yup';

export const initialRegValuesSchema = {
  comment: '',
};

export const regSchema = object().shape({
  comment: string().required('Required'),
});
