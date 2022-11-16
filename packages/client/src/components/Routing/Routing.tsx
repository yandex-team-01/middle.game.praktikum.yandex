import { Routes, Route, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

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

import { ErrorBoundary } from '../ErrorBoundary';
import { ProtectedRoute } from '../ProtectedRoute';
import { useAppSelector } from 'src/hooks/redux';

import { TopicList } from 'src/pages/Forum/components/TopicList';
import { BlockCreateTopic } from 'src/pages/Forum/components/BlockCreateTopic';

import { GameScreen } from 'src/pages/GameScreen';
import { selectAuth } from 'src/store/auth/AuthSelectors';
import { CommentsPage } from 'src/pages/Forum/components/CommentsPage';
import { BackgroundLayout } from 'src/layouts/BackgroundLayout';

export const Routing = () => {
  let lang = localStorage.getItem('i18nextLng');
  const { t } = useTranslation();
  const auth = useAppSelector(selectAuth);

  return (
    <ErrorBoundary>
      <Routes>
        <Route
          path={`/${lang}/`}
          element={
            <BackgroundLayout>
              {auth ? <MainMenu /> : <Landing />}
            </BackgroundLayout>
          }
        />
        <Route path="/" element={<Navigate to={`/${lang}/`} replace />} />
        <Route
          path={`/${lang}/forum`}
          element={
            <ProtectedRoute flag={auth} redirect={`/${lang}/login`}>
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
          element={<Navigate to={`/${lang}/forum`} replace />}
        />
        <Route
          path={`/${lang}/leaders`}
          element={
            <ProtectedRoute flag={auth} redirect={`/${lang}/login`}>
              <BackgroundLayout>
                <Leaderboard />
              </BackgroundLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/leaders"
          element={<Navigate to={`/${lang}/leaders`} replace />}
        />
        <Route
          path={`/${lang}/login`}
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
          path="/login"
          element={<Navigate to={`/${lang}/login`} replace />}
        />
        <Route
          path={`/${lang}/reg`}
          element={
            <BackgroundLayout>
              <RegistrationPage />
            </BackgroundLayout>
          }
        />
        <Route path="/reg" element={<Navigate to={`/${lang}/reg`} replace />} />
        <Route path={`/${lang}/loadinggame`} element={<GameLoadingPage />} />
        <Route
          path="/loadinggame"
          element={<Navigate to={`/${lang}/loadinggame`} replace />}
        />
        <Route path={`/${lang}/resetpassword`} element={<BackgroundLayout><Landing /></BackgroundLayout>} />
        <Route
          path="/resetpassword"
          element={<Navigate to={`/${lang}/resetpassword`} replace />}
        />
        <Route path={`/${lang}/game`} element={<GameScreen />} />
        <Route
          path="/game"
          element={<Navigate to={`/${lang}/game`} replace />}
        />
        <Route
          path={`/${lang}/settings`}
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
          path="/settings"
          element={<Navigate to={`/${lang}/settings`} replace />}
        />
        <Route
          path={`/${lang}/500`}
          element={<ErrorPage title="500" description={t('error500')} />}
        />
        <Route path="/500" element={<Navigate to={`/${lang}/500`} replace />} />
        <Route
          path={`/${lang}/404`}
          element={<ErrorPage title="404" description={t('error404')} />}
        />
        <Route path="*" element={<Navigate to={`/${lang}/404`} replace />} />
      </Routes>
    </ErrorBoundary>
  );
};
