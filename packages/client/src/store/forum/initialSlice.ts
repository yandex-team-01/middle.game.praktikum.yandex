import { ForumState } from '../types';
import topics from 'src/static/topics.json';
import { ITopic } from 'src/pages/Forum/components/Topic/types';

export const initialState: ForumState = {
  activeTopic: undefined,
  listTopics: topics as ITopic[],
};
