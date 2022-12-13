export type SignupData = {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
};

export type SigninData = {
  login: string;
  password: string;
};

export type oAuthServiceIdData = {
  service_id: string;
};

export type oAuthData = {
  code: string;
  redirect_uri: string;
};
