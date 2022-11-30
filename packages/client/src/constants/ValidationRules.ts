export const loginRules = /^(?=.*[A-Za-z])[0-9A-Za-z_-]{3,20}$/;
export const passwordRules = /^(?=.*[A-ZА-Я])(?=.*[0-9]).{10,}$/;
export const firstNameRules = /(^[A-ZА-Я])([A-ZА-Яa-zа-я-]+)/;
export const secondNameRules = /(^[A-ZА-Я])([A-ZА-Яa-zа-я-]+)/;
export const phoneRules = /(^[+]*)([0-9]{10,15})/;
export const displayNameRules = /^(?=.*[A-Za-z])[0-9A-Za-z_-]{3,20}$/;
export const emailRules =
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
