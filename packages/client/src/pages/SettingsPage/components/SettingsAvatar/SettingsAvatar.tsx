import styles from './SettingsAvatar.module.scss';
import img from 'src/assets/images/no-avatar.png';

export const SettingsAvatar = () => {
  const url = 0;
  return (
    <div className={styles.rounded}>
      {!url && <img src={img} alt="Аватар пользователя" />}
    </div>
  );
};
