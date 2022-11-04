import {
  Routes,
  Route,
  Link,
  Outlet
} from 'react-router-dom';

import { BlankWindow } from 'src/components/BlankWindow';

export const SettingsPage = () => {
  return (
    <>
    <BlankWindow>
      <Outlet />
    </BlankWindow>
    </>
  );
};