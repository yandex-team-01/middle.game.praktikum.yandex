
import { ErrorsNotification } from './components/ErrorsNotification';
import { Routing } from './components/Routing';
import { withAuth } from './hocs/withAuth'; 

 const AppComponent = () => {
  return (
    <>
      <ErrorsNotification />
      <Routing />
    </>
  );
};


export const App = withAuth(AppComponent);
