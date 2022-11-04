import { Routes, Route } from 'react-router-dom';
import {
  Forum,
  ErrorPage404,
  ErrorPage500,
  LoginPage,
  RegistrationPage,
  Leaderboard,
  SettingsPage,
  GameLoadingPage,
  HomePage,
  ForumCreateTopic,
  ForumCommentsPage,
} from 'src/pages';
import {
  SettingsChangePassword,
  SettingsChangeData,
  SettingsData,
} from '../../pages/SettingsPage';
import { ProtectedRoute } from '../ProtectedRoute';
import { BackgroundLayout } from 'src/layouts/BackgroundLayout';
import { useAppSelector } from 'src/hooks/redux';
import { ErrorBoundary } from '../ErrorBoundary';

export const Routing = () => {
  const auth = useAppSelector(state => state.auth.auth);

  return (
    <ErrorBoundary>
      <Routes>
        <Route
          path="/"
          element={
            <BackgroundLayout>
              <HomePage />
            </BackgroundLayout>
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
          path="/createtopic"
          element={
            <ProtectedRoute flag={auth} redirect="/login">
              <BackgroundLayout>
                <ForumCreateTopic />
              </BackgroundLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/topic"
          element={
            <ProtectedRoute flag={auth} redirect="/login">
              <BackgroundLayout>
                <ForumCommentsPage />
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
        <Route
          path="/settings"
          element={
            <BackgroundLayout>
              <SettingsPage />
            </BackgroundLayout>
          }>
          <Route index element={<SettingsData />} />
          <Route path="edit" element={<SettingsChangeData />} />
          <Route path="password" element={<SettingsChangePassword />} />
        </Route>
        <Route path="/500" element={<ErrorPage500 />} />
        <Route path="*" element={<ErrorPage404 />} />
      </Routes>
    </ErrorBoundary>
  );
};
