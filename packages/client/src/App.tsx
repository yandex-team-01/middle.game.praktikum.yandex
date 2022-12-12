
import { ErrorsNotification } from './components/ErrorsNotification';
import { Routing } from './components/Routing';
import { withAuth } from './hocs/withAuth';
import { useMountEffectOneCall } from './hooks/useMountEffectOneCall';
import { fetchOAuthStepThreeGetApproveFromApiPracticum } from 'src/store/auth/AuthActions';
import { useAppDispatch } from './hooks/redux';
import { useGeoLocation } from 'src/hooks/useGeoLocation';

export const useCheckOauthCode = () => {
  const dispatch = useAppDispatch();
  //третий шаг oAuth - отправляем код полученный после редиректа на страницу согласия на авторизацию
  useMountEffectOneCall(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const code = urlParams.get('code');
    if (code) {
      dispatch(fetchOAuthStepThreeGetApproveFromApiPracticum(code));
    }
  });
}; 

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
