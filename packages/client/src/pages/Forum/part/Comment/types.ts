export interface IComment {
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
