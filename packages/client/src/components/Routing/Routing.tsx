import { Routes, Route, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

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
import { langPath } from 'src/utils/langPath';

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
          path={langPath('/auth')}
          element={
            <BackgroundLayout>
              <AuthPage />
            </BackgroundLayout>
          }>
          <Route index element={<LoginForm />} />
          <Route path="reg" element={<RegistrationForm />} />
        </Route>
        <Route
          path="/auth"
          element={<Navigate to={langPath('/auth')} replace />}
        />

        <Route
          path={langPath('/')}
          element={
            <BackgroundLayout>
              {auth ? <MainMenu /> : <Landing />}
            </BackgroundLayout>
          }
        />
        <Route path="/" element={<Navigate to={langPath('/')} replace />} />
        <Route
          path={langPath('/forum')}
          element={
            <ProtectedRoute flag={auth} redirect={langPath('/auth')}>
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
          path="/forum"
          element={<Navigate to={langPath('/forum')} replace />}
        />
        <Route
          path={langPath('/leaders')}
          element={
            <ProtectedRoute flag={auth} redirect={langPath('/auth')}>
              <BackgroundLayout>
                <Leaderboard />
              </BackgroundLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/leaders"
          element={<Navigate to={langPath('/leaders')} replace />}
        />
        <Route path={langPath('/loadinggame')} element={<GameLoadingPage />} />
        <Route
          path="/loadinggame"
          element={<Navigate to={langPath('/loadinggame')} replace />}
        />
        <Route
          path={langPath('/resetpassword')}
          element={
            <BackgroundLayout>
              <Landing />
            </BackgroundLayout>
          }
        />
        <Route
          path="/resetpassword"
          element={<Navigate to={langPath('/resetpassword')} replace />}
        />
        <Route path={langPath('/game')} element={<GameScreen />} />
        <Route
          path="/game"
          element={<Navigate to={langPath('/game')} replace />}
        />
        <Route
          path={langPath('/settings')}
          element={
            <ProtectedRoute flag={auth} redirect={langPath('/auth')}>
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
          path="/settings"
          element={<Navigate to={langPath('/settings')} replace />}
        />
        <Route
          path={langPath('/500')}
          element={<ErrorPage title="500" description={t('error500')} />}
        />
        <Route
          path="/500"
          element={<Navigate to={langPath('/500')} replace />}
        />
        <Route
          path={langPath('/404')}
          element={<ErrorPage title="404" description={t('error404')} />}
        />
        <Route path="*" element={<Navigate to={langPath('/404')} replace />} />
      </Routes>
    </ErrorBoundary>
  );
};
