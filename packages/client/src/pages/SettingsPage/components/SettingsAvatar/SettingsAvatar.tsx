import { useTranslation } from 'react-i18next';

import styles from './SettingsAvatar.module.scss';

import img from 'src/assets/images/no-avatar.png';
import { env } from 'src/constants/Env';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { IUser } from 'src/modules/IUser';
import { fetchChangeAvatar } from 'src/store/users/UsersActions';

export const SettingsAvatar = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.auth.user as IUser);
  const url = `${env.HOST_RESOURCES}${user.avatar}`;
  const avatar = user.avatar ? url : img;

  const uploadAvatar = (event: any) => {
    const file = event.target.files[0]
    dispatch(fetchChangeAvatar(file));
  };

  return (
    <div>
      <div className={styles.rounded}>
        <img className={styles.avatar} src={avatar} alt={t('avatar')} />
      </div>
      <input accept="image/*" type="file" onChange={uploadAvatar} />
    </div>
  );
};
