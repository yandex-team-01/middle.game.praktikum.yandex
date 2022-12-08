import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { usersReducer } from './users/UsersSlice';
import { authReducer } from './auth/AuthSlice';
import { errorReducer } from './error/ErrorSlice';
import { forumReducer } from './forum/ForumSlice';
import { geolocationReducer } from './geolocation/GeoSlice';
import { PreloadedState } from './types';
import { leaderboardReducer } from './leaderboard/LeaderboardSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  error: errorReducer,
  forum: forumReducer,
  users: usersReducer,
  leaderboard: leaderboardReducer,
  geolocation: geolocationReducer,
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
