import i18next from 'i18next';
import { ReactNode, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from 'src/hooks/redux';
import { useMountEffectOneCall } from 'src/hooks/useMountEffectOneCall';
import { useNavigator } from 'src/hooks/useNavigator';
import { fetchGeoLocation } from 'src/store/geolocation/GeoActions';
import { selectGeoLocation } from 'src/store/geolocation/GeoSelectors';
import { geolocation } from 'src/utils/geoLocationAPI';
import { useBoundAction } from './useBoundAction';

export interface Props {
  children: ReactNode;
}

export const useLocation = () => {
  const location = useAppSelector(selectGeoLocation);
  const navigator = useNavigator();

  const { t } = useTranslation();
  const callback = useBoundAction((data) => fetchGeoLocation(data));

  useMountEffectOneCall(() => {
    geolocation(callback, t);
  });

  useEffect(() => {
    if (!location) return;

    const countryIsoCode = location.suggestions[0].data.country_iso_code;
    let switchLanguage = false;

    if (
      countryIsoCode.toLowerCase() === 'ru' &&
      i18next.language.toLowerCase() === 'en'
    ) {
      switchLanguage = confirm(t('switchLanguage'));
      if (!switchLanguage) return;

      const pathname = window.location.pathname.split('/en')[1];

      i18next.changeLanguage('ru', err => {
        if (err) {
          console.error(err);
          return;
        }
        // т.к. при смене языка нас перебрасывает на 404, 
        // мы запоминаем текущий pathname и восстанавливаем страницу 
        navigator(`${pathname}`);
      });
    }
  }, [location, navigator, t]);
};
