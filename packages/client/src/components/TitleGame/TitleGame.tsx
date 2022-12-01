import React from 'react';
import { useTranslation } from 'react-i18next';

interface IProps {
    className?: string
}

export const TitleGame = ({ className }: IProps) => {
    const { t } = useTranslation();

    return (
        <h1 className={className}>
            {t('HuggyWuggy')}
            <br />{t('&')} {t('KissyMissy')}
        </h1>
    );
};
