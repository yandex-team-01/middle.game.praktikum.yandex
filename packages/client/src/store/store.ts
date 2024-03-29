import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { i18n } from 'i18next';
import { usersReducer } from './users/UsersSlice';
import { authReducer } from './auth/AuthSlice';
import { errorReducer } from './error/ErrorSlice';
import { forumReducer } from './forum/ForumSlice';
import { geolocationReducer } from './geolocation/GeoSlice';
import { PreloadedState } from './types';
import { leaderboardReducer } from './leaderboard/LeaderboardSlice';
import { themeReducer } from './theme/ThemeSlice';
import { getEnvSsrAndProd } from 'src/utils/getEnvSsrAndProd';

const rootReducer = combineReducers({
  auth: authReducer,
  error: errorReducer,
  forum: forumReducer,
  users: usersReducer,
  leaderboard: leaderboardReducer,
  geolocation: geolocationReducer,
  themes: themeReducer,
});

const env = getEnvSsrAndProd();

export const setupStore = (preloadedState: PreloadedState, i18n?: i18n) => {
  return configureStore({
    reducer: rootReducer,
    devTools: !env.isPROD,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: i18n,
        },
        serializableCheck: false,
      }),
    preloadedState: preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
