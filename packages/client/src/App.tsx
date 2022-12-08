import { ErrorsNotification } from './components/ErrorsNotification';
import { Location } from './components/Location/Location';
import { Routing } from './components/Routing';
import { withAuth } from './hocs/withAuth';

const AppComponent = () => {
  return (
    <Location>
      <ErrorsNotification />
      <Routing />
    </Location>
  );
};

export const App = withAuth(AppComponent);
