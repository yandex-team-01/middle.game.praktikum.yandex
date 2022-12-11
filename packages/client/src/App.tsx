import { ErrorsNotification } from 'src/components/ErrorsNotification';
import { useGeoLocation } from 'src/hooks/useGeoLocation';
import { Routing } from 'src/components/Routing';
import { withAuth } from 'src/hocs/withAuth';

const AppComponent = () => {

  useGeoLocation();

  return (
    <>
      <ErrorsNotification />
      <Routing />
    </>
  );
};

export const App = withAuth(AppComponent);
