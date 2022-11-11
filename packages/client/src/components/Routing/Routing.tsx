import { Routes, Route, Navigate } from 'react-router-dom';
import {
  Forum,
  ErrorPage,
  LoginPage,
  RegistrationPage,
  Leaderboard,
  SettingsPage,
  GameLoadingPage,
  MainMenu,
  Landing,
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
import { TopicList } from 'src/pages/Forum/components/TopicList';
import { BlockComments } from 'src/pages/Forum/components/BlockComments';
import { BlockCreateTopic } from 'src/pages/Forum/components/BlockCreateTopic';
import { GameScreen } from 'src/pages/GameScreen';
import { selectAuth } from 'src/store/auth/AuthSelectors';

export const Routing = () => {
  const auth = useAppSelector(selectAuth);

  return (
    <ErrorBoundary>
      <Routes>
        <Route
          path="/"
          element={
            <BackgroundLayout>
              {auth ? <MainMenu /> : <Landing />}
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
          }>
          <Route index element={<TopicList />} />
          <Route path="topic" element={<BlockComments />} />
          <Route path="createtopic" element={<BlockCreateTopic />} />
        </Route>
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
            auth ? (
              <Navigate to="/" replace />
            ) : (
              <BackgroundLayout>
                <LoginPage />
              </BackgroundLayout>
            )
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
        <Route path="/loadinggame" element={<GameLoadingPage />} />
        <Route path="/game" element={<GameScreen />} />
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
        <Route
          path="/500"
          element={<ErrorPage title="500" description="Oops! Page not found" />}
        />
        <Route
          path="*"
          element={<ErrorPage title="404" description="No connection" />}
        />
      </Routes>
    </ErrorBoundary>
  );
};
