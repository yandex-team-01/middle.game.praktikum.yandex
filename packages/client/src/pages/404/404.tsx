import { EmptyLayout } from '../../layouts/EmptyLayout';

const props = {
  title: 'Страница не найдена',
  description: '404',
};

export const ErrorPage404 = () => {
  return (
    <EmptyLayout>
      <div>
        <h1>{props.title}</h1>
        <h2>{props.description}</h2>
      </div>
    </EmptyLayout>
  );
};
