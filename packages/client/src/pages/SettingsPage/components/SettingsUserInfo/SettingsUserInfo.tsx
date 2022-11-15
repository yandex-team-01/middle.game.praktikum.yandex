import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';

import { fetchAuth } from 'src/store/auth/AuthActions';

import stylesForm from 'src/components/Form/Form.module.scss';

export const SettingsUserInfo = () => {
  const user = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();

  const email = user.user?.email
  const display_name = user.user?.display_name
  const first_name = user.user?.first_name
  const second_name = user.user?.second_name
  const phone = user.user?.phone

  useEffect(() => {
    dispatch(fetchAuth());
  }, [dispatch]);

  return (
    <div className={stylesForm.form_center}>
      <div>
        <p className={stylesForm.form_title}>{email}</p>
        <p className={stylesForm.form_title}>{display_name}</p>
        <p className={stylesForm.form_title}>{first_name}</p>
        <p className={stylesForm.form_title}>{second_name}</p>
        <p className={stylesForm.form_title}>{phone}</p>
      </div>
    </div>
  );
};
