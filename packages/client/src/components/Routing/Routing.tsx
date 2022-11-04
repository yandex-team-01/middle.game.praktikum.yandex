import { Routes, Route } from 'react-router-dom';
import {
  Forum,
  ErrorPage404,
  ErrorPage500,
  LoginPage,
  RegistrationPage,
  Leaderboard,
  GameLoadingPage,
  HomePage,
} from '../../pages';
import { ProtectedRoute } from '../ProtectedRoute';
import { BackgroundLayout } from '../../layouts/BackgroundLayout';
import { useAppSelector } from '../../hooks/redux';
import { ErrorBoundary } from '../ErrorBoundary';

export const Routing = () => {
  const auth = useAppSelector(state => state.auth.auth);

  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<HomePage />} />
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
            <ProtectedRoute flag={auth} redirect="/login">
              <BackgroundLayout>
                <Leaderboard />
              </BackgroundLayout>
            </ProtectedRoute>
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
        <Route path="/loading" element={<GameLoadingPage />} />
        <Route path="/500" element={<ErrorPage500 />} />
        <Route path="*" element={<ErrorPage404 />} />
      </Routes>
    </ErrorBoundary>
  );
};
