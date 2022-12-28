import { IEmoji, IEmojiForBackend } from '../EmojiBlock/types';

export interface IComment {
  id: string;
  id_topic: string;
  text: string;
  id_author: string;
  date: string;
  likes: number;
  Reactions: IEmoji[];
}
export interface ICommentForBackend {
  id: string;
  id_topic: string;
  text: string;
  id_author: string;
  date: string;
  likes: number;
  Reactions: IEmojiForBackend[];
}

export interface ICommentCreate {
  id: string;
  id_topic: string;
  text: string;
  id_author: string;
  date: string;
  likes: number;
}

export interface Props {
  comment: IComment;
}
