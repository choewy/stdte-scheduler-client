import { FC, lazy } from 'react';

import { useAuth } from '@/apis/auth';
import { SignInPage, SignUpPage } from '@/pages';

const AppNavBar = lazy(() => import('./app-nav-bar'));
const AppSideBar = lazy(() => import('./app-side-bar'));

const App: FC = () => {
  useAuth();

  return (
    <div>
      <AppNavBar />
      <AppSideBar />
      <SignInPage />
      <SignUpPage />
    </div>
  );
};

export default App;
