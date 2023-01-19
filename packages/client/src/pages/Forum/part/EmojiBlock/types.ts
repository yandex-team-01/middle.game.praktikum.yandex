export interface IEmoji {
  value: string;
  authorsId: string[];
}

export interface IEmojiForBackend {
  id: string;
  id_comment: string;
  text: string;
  id_author: string;
  value: string;
}
export interface IEmojiCreate {
  id: string;
  id_comment: string;
  value: string;
  id_author: string;
}
export interface IEmojiAnswer {
  createdAt: string;
  id: string;
  id_author: string;
  id_comment: string;
  updatedAt: string;
  value: string;
}

export interface Props {
  reactions: IEmoji[];
  idComment: string;
}
