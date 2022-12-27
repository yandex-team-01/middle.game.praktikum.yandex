import { IComment } from '../Comment/types';
import { ITopic } from '../Topic/types';

export interface Props {
  topic: ITopic;
  comments: Record<string, IComment> | undefined;
}
