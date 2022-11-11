import { ForumState } from '../types';
import topics from 'src/static/topics.json';
import { ITopic } from 'src/pages/Forum/part/Topic/types';

export const initialState: ForumState = {
  activeTopic: undefined,
  topics: topics.reduce<Record<string, ITopic>>((acc, t) => {
    acc[t.id] = t;
    return acc;
  }, {}),
};
