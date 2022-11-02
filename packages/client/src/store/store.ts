import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/AuthSlice';
import { errorReducer } from './error/ErrorSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  error: errorReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
