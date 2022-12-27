import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const selectActiveTopic = createSelector(
  (state: RootState) => state.forum,
  forum => forum.activeTopic
);

export const selectListTopics = createSelector(
  (state: RootState) => state.forum,
  forum => forum.topics
);

export const selectLogin = createSelector(
  [(state: RootState) => state.auth],
  auth => ({ login: auth.user?.login })
);

export const selectComments = createSelector(
  (state: RootState) => state.forum,
  forum => forum.comments
);

export const selectLoading = createSelector(
  (state: RootState) => state.forum,
  forum => forum.loading
);
