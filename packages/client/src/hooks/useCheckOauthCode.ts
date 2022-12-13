import { env } from 'src/constants/Env';
import { fetchOAuthStepThreeGetApproveFromApiPracticum } from 'src/store/auth/AuthActions';
import { useBoundAction } from './useBoundAction';
import { useMountEffectOneCall } from './useMountEffectOneCall';

export const useCheckOauthCode = () => {
  const handler = useBoundAction(code =>
    fetchOAuthStepThreeGetApproveFromApiPracticum(code)
  );

  useMountEffectOneCall(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const code = urlParams.get('code');
    if (code) {
      handler(code);
      urlParams.delete('code');
      window.history.replaceState({}, '', env.REDIRECT_URI);
    }
  });
};
