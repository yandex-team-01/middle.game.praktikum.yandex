import { IComment } from 'src/pages/Forum/part/Comment/types';

export interface ITopic {
  id: string;
  title: string;
  description: string;
  author: string;
  date: string;
  comments: IComment[];
  views: number;
}

export interface Props {
  topic: ITopic;
}
