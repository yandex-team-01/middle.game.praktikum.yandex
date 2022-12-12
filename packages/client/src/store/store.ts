import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { usersReducer } from './users/UsersSlice';
import { authReducer } from './auth/AuthSlice';
import { errorReducer } from './error/ErrorSlice';
import { forumReducer } from './forum/ForumSlice';
import { PreloadedState } from './types';
import { leaderboardReducer } from './leaderboard/LeaderboardSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  error: errorReducer,
  forum: forumReducer,
  users: usersReducer,
  leaderboard: leaderboardReducer,
});

export const setupStore = (preloadedState: PreloadedState) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState: preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
