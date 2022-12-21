import { ErrorsNotification } from './components/ErrorsNotification';
import { Routing } from './components/Routing';
import { withAuth } from './hocs/withAuth';
import { useGeoLocation } from 'src/hooks/useGeoLocation';
import { useCheckOauthCode } from './hooks/useCheckOauthCode';
import { useAppSelector } from './hooks/redux';
import { selectTheme } from './store/theme/selectTheme';
import { ThemeContext } from './components/ThemeTogglerButton/ThemeContext';

const AppComponent = () => {
  useGeoLocation();
  useCheckOauthCode();

  const theme = useAppSelector(selectTheme);

  return (
    <ThemeContext.Provider value={theme}>
      <ErrorsNotification />
      <Routing />
    </ThemeContext.Provider>
  );
};

export const App = withAuth(AppComponent);
