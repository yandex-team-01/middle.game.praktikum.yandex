export interface SignupData {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
}

export interface SigninData {
  login: string;
  password: string;
}

export type oAuthServiceIdData = {
  service_id: string;
};

export type oAuthData = {
  code: string;
  redirect_uri: string;
};
