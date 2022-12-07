import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createMemoryHistory } from 'history';

import { usersReducer } from './users/UsersSlice';
import { authReducer } from './auth/AuthSlice';
import { errorReducer } from './error/ErrorSlice';
import { forumReducer } from './forum/ForumSlice';
import { PreloadedState } from './types';

// @ts-ignore
const rootReducer = history => {
  return combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    error: errorReducer,
    forum: forumReducer,
    users: usersReducer,
  });
};

export const history = createMemoryHistory({
  initialEntries: ['/'],
}); //createBrowserHistory();

// @ts-ignore
export const setupStore = (preloadedState: PreloadedState) => {
  return configureStore({
    reducer: rootReducer(history),
    preloadedState: preloadedState || {},
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().prepend(routerMiddleware(history)),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
