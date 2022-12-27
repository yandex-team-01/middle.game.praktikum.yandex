import { IComment } from '../Comment/types';

export interface Props {
  comments: Record<string, IComment> | undefined;
}
