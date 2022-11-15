import { UserData } from './../modules/IUsers';
import { ITopic } from 'src/pages/Forum/part/Topic/types';
import { IUser } from '../modules/IUser';

export interface AuthState {
  checkAuth: boolean;
  auth: boolean;
  loading: boolean;
  user: IUser | null;
}

export interface ChangeDataState {
  checkAuth: boolean;
  auth: boolean;
  loading: boolean;
  user: UserData | null;
}

export interface ErrorState {
  errorList: {
    text: string;
    id: string;
  }[];
}

export interface ForumState {
  activeTopic: ITopic | undefined;
  topics: Record<string, ITopic>;
}
