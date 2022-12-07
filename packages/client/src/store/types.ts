import { ITopic } from 'src/pages/Forum/part/Topic/types';
import { IUser } from '../modules/IUser';

export interface AuthState {
  checkAuth: boolean;
  auth: boolean;
  loading: boolean;
  user: IUser | null;
}

export interface ChangeDataState {
  loading: boolean;
  user: IUser | null;
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

export interface PreloadedState {
  auth: AuthState;
  error: ErrorState;
  forum: ForumState;
  users: ChangeDataState;
}
