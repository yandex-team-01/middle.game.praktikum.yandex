import { Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Redirect } from 'src/components/Redirect';

import {
  Forum,
  ErrorPage,
  Leaderboard,
  SettingsPage,
  GameLoadingPage,
  MainMenu,
  Landing,
  AuthPage,
} from 'src/pages';
import {
  SettingsChangePassword,
  SettingsChangeData,
  SettingsData,
} from '../../pages/SettingsPage';

import { ErrorBoundary } from '../ErrorBoundary';
import { ProtectedRoute } from '../ProtectedRoute';
import { useAppSelector } from 'src/hooks/redux';

import { TopicList } from 'src/pages/Forum/components/TopicList';
import { BlockCreateTopic } from 'src/pages/Forum/components/BlockCreateTopic';

import { GameScreen } from 'src/pages/GameScreen';
import { selectAuth } from 'src/store/auth/AuthSelectors';
import { CommentsPage } from 'src/pages/Forum/components/CommentsPage';
import { BackgroundLayout } from 'src/layouts/BackgroundLayout';

import { LoginForm } from 'src/pages/AuthPage/components/LoginForm';
import { RegistrationForm } from 'src/pages/AuthPage/components/RegistrationForm';

export const Routing = () => {
  const { t } = useTranslation();
  const auth = useAppSelector(selectAuth);

  return (
    <ErrorBoundary>
      <Routes>
        <Route
          path="/auth"
          element={
            <ProtectedRoute flag={!auth} redirect="/">
              <BackgroundLayout>
                <AuthPage />
              </BackgroundLayout>
            </ProtectedRoute>
          }>
          <Route index element={<LoginForm login={''} password={''} />} />
          <Route
            path="reg"
            element={
              <RegistrationForm
                first_name={''}
                second_name={''}
                login={''}
                email={''}
                password={''}
                phone={''}
              />
            }
          />
        </Route>
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
            <ProtectedRoute flag={auth} redirect="/auth">
              <BackgroundLayout>
                <Forum />
              </BackgroundLayout>
            </ProtectedRoute>
          }>
          <Route index element={<TopicList />} />
          <Route path="topic" element={<CommentsPage />} />
          <Route path="createtopic" element={<BlockCreateTopic />} />
        </Route>
        <Route
          path="/leaders"
          element={
            <ProtectedRoute flag={auth} redirect="/auth">
              <BackgroundLayout>
                <Leaderboard />
              </BackgroundLayout>
            </ProtectedRoute>
          }
        />
        <Route path="/loadinggame" element={<GameLoadingPage />} />
        <Route path="/game" element={<GameScreen />} />
        <Route
          path="/settings"
          element={
            <ProtectedRoute flag={auth} redirect="/auth">
              <BackgroundLayout>
                <SettingsPage />
              </BackgroundLayout>
            </ProtectedRoute>
          }>
          <Route index element={<SettingsData />} />
          <Route path="edit" element={<SettingsChangeData />} />
          <Route path="password" element={<SettingsChangePassword />} />
        </Route>
        <Route
          path="/500"
          element={<ErrorPage title="500" description={t('error500')} />}
        />
        <Route
          path="/404"
          element={<ErrorPage title="404" description={t('error404')} />}
        />
        <Route path="*" element={<Redirect to="/404" />} />
      </Routes>
    </ErrorBoundary>
  );
};
