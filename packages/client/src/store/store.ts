import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import errorReducer from './slices/ErrorSlice'
import authReducer from './slices/AuthSlice';
import errorSlice from './slices/ErrorSlice';

const rootReducer = combineReducers({
  authReducer,
  errorSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
