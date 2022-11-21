import { useTranslation } from 'react-i18next';

import styles from './SettingsAvatar.module.scss';
import img from 'src/assets/images/no-avatar.png';

export const SettingsAvatar = () => {
  const { t } = useTranslation();
  const url = 0;
  return (
    <div className={styles.rounded}>
      {!url && <img src={img} alt={t('avatar')} />}
    </div>
  );
};
