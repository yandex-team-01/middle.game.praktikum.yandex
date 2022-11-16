import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { EmptyLayout } from 'src/layouts/EmptyLayout';

type ErrorPageProps = {
  title: string;
  description: string;
};

export const ErrorPage = ({ title, description }: ErrorPageProps) => {
  return (
    <ErrorBoundary>
      <EmptyLayout>
        <div>
          <h1>{title}</h1>
          <h2>{description}</h2>
        </div>
      </EmptyLayout>
    </ErrorBoundary>
  );
};