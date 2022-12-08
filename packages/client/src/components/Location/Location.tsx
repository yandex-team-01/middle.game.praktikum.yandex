import i18next from 'i18next';
import React, { ReactNode, useEffect, memo } from 'react';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { useMountEffect } from 'src/hooks/useMountEffect';
import { useNavigator } from 'src/hooks/useNavigator';
import { fetchGeoLocation } from 'src/store/geolocation/GeoActions';
import { selectGeoLocation } from 'src/store/geolocation/GeoSelectors';
import { geolocation } from 'src/utils/geoLocationAPI';

export interface Props {
    children: ReactNode;
}

export const Location = memo(({ children }: Props) => {
    const location = useAppSelector(selectGeoLocation);
    const dispatch = useAppDispatch();
    const navigator = useNavigator();

    useEffect(() => {
        if (!location) return;

        const countryIsoCode = location?.suggestions[0].data.country_iso_code;
        let switchLanguage = false;

        if (countryIsoCode === 'RU' && i18next.language !== 'ru') {
            switchLanguage = confirm("Вы находитесь в России, переключить язык на русский?");
            // console.log(switchLanguage);
            if (!switchLanguage) return;

            i18next.changeLanguage('ru', (err) => {
                if (err) {
                    console.log(err);
                    return;
                }
                navigator('/');
            });
        }
    }, [location, navigator]);

    useMountEffect(() => {
        geolocation((data) => dispatch(fetchGeoLocation(data)));
    });

    return (
        <>
            {children}
        </>
    );
});
