export interface ITopic {
    title: string;
    description: string;
    author: string;
    date: string;
    comments: string[];
    views: number;
}

export interface Props {
    topic: ITopic;
}
  
