import { ErrorsNotification } from './components/ErrorsNotification';
import { Routing } from './components/Routing';
import { withAuth } from './hocs/withAuth';
import { useGeoLocation } from 'src/hooks/useGeoLocation';
import { useCheckOauthCode } from './hooks/useCheckOauthCode';

const AppComponent = () => {
  useGeoLocation();
  useCheckOauthCode();

  return (
    <>
      <ErrorsNotification />
      <Routing />
    </>
  );
};

export const App = withAuth(AppComponent);
