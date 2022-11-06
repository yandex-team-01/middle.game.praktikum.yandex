import stylesForm from 'src/components/Form/Form.module.scss';

export const SettingsUserInfo = () => {
  return (
    <div className={stylesForm.form_center}>
      <p className={stylesForm.form_title}>ivanov@ivan.ru</p>
      <p className={stylesForm.form_title}>jack_london</p>
      <p className={stylesForm.form_title}>Jack</p>
      <p className={stylesForm.form_title}>Martin</p>
      <p className={stylesForm.form_title}>+3123456789</p>
    </div>
  );
};
