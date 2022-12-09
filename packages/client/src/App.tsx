import { ErrorsNotification } from 'src/components/ErrorsNotification';
import { useLocation } from 'src/hooks/useLocation';
import { Routing } from 'src/components/Routing';
import { withAuth } from 'src/hocs/withAuth';

const AppComponent = () => {
  useLocation();

  return (
    <>
      <ErrorsNotification />
      <Routing />
    </>
  );
};

export const App = withAuth(AppComponent);
