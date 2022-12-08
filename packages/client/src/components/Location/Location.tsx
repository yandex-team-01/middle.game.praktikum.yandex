import i18next from 'i18next';
import React, { ReactNode, useEffect, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { useMountEffectOneCall } from 'src/hooks/useMountEffectOneCall';
import { useNavigator } from 'src/hooks/useNavigator';
import { fetchGeoLocation } from 'src/store/geolocation/GeoActions';
import { selectGeoLocation } from 'src/store/geolocation/GeoSelectors';
import { geolocation } from 'src/utils/geoLocationAPI';

export interface Props {
  children: ReactNode;
}

const languagesCode = ['ru', 'RU'];

export const Location = memo(({ children }: Props) => {
  const location = useAppSelector(selectGeoLocation);
  const dispatch = useAppDispatch();
  const navigator = useNavigator();

  const { t } = useTranslation();

  useMountEffectOneCall(() => {
    geolocation(data => dispatch(fetchGeoLocation(data)), t);
  });

  useEffect(() => {
    if (!location) return;

    const countryIsoCode = location.suggestions[0].data.country_iso_code;
    let switchLanguage = false;

    if (
      languagesCode.includes(countryIsoCode) &&
      !languagesCode.includes(i18next.language)
    ) {
      switchLanguage = confirm(t('switchLanguage'));
      if (!switchLanguage) return;

      i18next.changeLanguage('ru', err => {
        if (err) {
          console.log(err);
          return;
        }
        navigator('/');
      });
    }
  }, [location, navigator, t]);

  return <>{children}</>;
});
