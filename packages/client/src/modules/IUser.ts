export interface IUser {
  id: number;
  first_name: string;
  second_name: string;
  display_name?: string | undefined;
  login: string;
  email: string;
  phone: string;
  avatar?: string | undefined;
}

export interface IUserWithTheme extends IUser {
  theme: string;
}
