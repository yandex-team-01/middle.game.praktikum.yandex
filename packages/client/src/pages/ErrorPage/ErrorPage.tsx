import { useTranslation } from 'react-i18next';

import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { EmptyLayout } from 'src/layouts/EmptyLayout';

export const ErrorPage404 = () => {
  const { t } = useTranslation();
  return (
    <ErrorBoundary>
      <EmptyLayout>
        <div>
          <h1>{t('error404')}</h1>
          <h2>404</h2>
        </div>
      </EmptyLayout>
    </ErrorBoundary>
  );
};
