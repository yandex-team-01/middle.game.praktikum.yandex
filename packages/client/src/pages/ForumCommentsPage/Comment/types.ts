export interface IComment {
  text: string;
  author: string;
  date: string;
  likes: number;
}

export interface Props {
  comment: IComment;
}
