import { IUser } from '../../modules/IUser';

export interface AuthState {
  checkAuth: boolean
  auth: boolean
  loading: boolean
  user: IUser | null
}
