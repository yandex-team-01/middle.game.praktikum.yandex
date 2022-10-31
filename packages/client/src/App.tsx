import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from './components/ProtectedRoute';
import {
  Forum,
  LoginPage,
  RegistrationPage,
  ErrorPage404,
  ErrorPage500,
  Leaderboard,
} from 'src/pages';

import BackgroundLayout from './layouts/BackgroundLayout';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchAuth } from './controllers/AuthController';
import { Preloader } from './components/Preloader';
import PopupError from './components/PopupError';

export const App = () => {
  const dispath = useAppDispatch();
  const { auth, checkAuth } = useAppSelector(state => state.authReducer);

  useEffect(() => {
    dispath(fetchAuth());
  }, []);

  if (!checkAuth) {
    return (
      <BackgroundLayout>
        <Preloader />
      </BackgroundLayout>
    );
  }

  return (
    <>
      <PopupError />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute flag={auth} redirect="/login">
              <BackgroundLayout>
                <div>Вот тут будет жить ваше приложение :)</div>
              </BackgroundLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/forum"
          element={
            <ProtectedRoute flag={auth} redirect="/login">
              <BackgroundLayout>
                <Forum />
              </BackgroundLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/leaders"
          element={
            <BackgroundLayout>
              <Leaderboard />
            </BackgroundLayout>
          }
        />

        <Route
          path="/login"
          element={
            <BackgroundLayout>
              <LoginPage />
            </BackgroundLayout>
          }
        />
        <Route
          path="/reg"
          element={
            <BackgroundLayout>
              <RegistrationPage />
            </BackgroundLayout>
          }
        />
        <Route path="/500" element={<ErrorPage500 />} />
        <Route path="*" element={<ErrorPage404 />} />
      </Routes>
    </>
  );
};
