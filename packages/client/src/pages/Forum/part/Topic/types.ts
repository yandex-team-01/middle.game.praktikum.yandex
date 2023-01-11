export interface ITopic {
  id: string;
  title: string;
  description: string;
  id_author: string;
  date: string;
  views: number;
}

export interface Props {
  topic: ITopic;
}
