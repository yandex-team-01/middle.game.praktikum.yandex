import { useAppSelector } from 'src/hooks/redux';

import stylesForm from 'src/components/Form/Form.module.scss';

export const SettingsUserInfo = () => {
  const user = useAppSelector(state => state.auth.user!);

  return (
    <div className={stylesForm.form_center}>
      <div>
        <p className={stylesForm.form_title}>{user.email}</p>
        <p className={stylesForm.form_title}>{user.display_name}</p>
        <p className={stylesForm.form_title}>{user.first_name}</p>
        <p className={stylesForm.form_title}>{user.second_name}</p>
        <p className={stylesForm.form_title}>{user.phone}</p>
      </div>
    </div>
  );
};
