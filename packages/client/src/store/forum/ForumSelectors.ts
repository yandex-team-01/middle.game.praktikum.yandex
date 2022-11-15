import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const selectActiveTopic = createSelector(
  (state: RootState) => state.forum,
  forum => [forum.activeTopic]
);

export const selectListTopics = createSelector(
  (state: RootState) => state.forum,
  forum => forum.topics
);

export const selectLoginTopic = createSelector(
  [(state: RootState) => state.auth, (state: RootState) => state.forum],
  (auth, forum) => ({ login: auth.user?.login, topic: forum.activeTopic })
);
