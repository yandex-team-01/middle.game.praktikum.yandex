import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

interface seoProps {
  title: string;
  description?: string;
  name?: string;
  type?: string;
}

export const SEO = ({ title }: seoProps) => {
  const { t } = useTranslation();
  return (
    <Helmet>
      <title>
        {title} - {t('title.app')}
      </title>
    </Helmet>
  );
};
