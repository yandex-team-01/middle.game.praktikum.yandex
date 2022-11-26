import { useTranslation } from 'react-i18next';

import styles from './SettingsAvatar.module.scss';

import noAvatarImg from 'src/assets/images/no-avatar.png';

import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { fetchChangeAvatar } from 'src/store/users/UsersActions';
import { selectUser } from 'src/store/auth/AuthSelectors';
import { hostResources } from 'src/utils/hostResources';
import { ChangeEvent } from 'react';

export const SettingsAvatar = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const url = hostResources(user.avatar);

  const avatar: string = user.avatar ? url : noAvatarImg;

  const onUploadAvatar = (event: ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    if (file.type.indexOf("image") !== -1) {
      dispatch(fetchChangeAvatar(file));
    }
  };

  return (
    <div>
      <div className={styles.rounded}>
        <img className={styles.avatar} src={avatar} alt={t('avatar')} />
      </div>
      <input accept="image/*" type="file" onChange={onUploadAvatar} />
    </div>
  );
};
