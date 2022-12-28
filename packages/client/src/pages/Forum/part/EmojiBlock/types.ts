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
  id_comment: string;
  value: string;
  id_author: string;
}

export interface Props {
  reactions: IEmoji[];
  idComment: string;
}
