import { FC } from 'react';

import { useAuthChecking } from '@/apis/auth';
import {
  AuthPage,
  BlockPage,
  HomePage,
  SignInPage,
  SignOutPage,
  SignUpPage,
  WaitPage,
} from '@/pages';
import { Route, Routes } from 'react-router-dom';
import { RoutePath } from '@/common/constants';

const App: FC = () => {
  useAuthChecking();

  return (
    <div>
      <Routes>
        <Route path={RoutePath.Home.url.join('')} element={<HomePage />} />
        <Route path={RoutePath.Auth.url.join('')} element={<AuthPage />} />
        <Route path={RoutePath.Wait.url.join('')} element={<WaitPage />} />
        <Route path={RoutePath.Block.url.join('')} element={<BlockPage />} />
        <Route path={RoutePath.SignIn.url.join('')} element={<SignInPage />} />
        <Route path={RoutePath.SignUp.url.join('')} element={<SignUpPage />} />
        <Route
          path={RoutePath.SignOut.url.join('')}
          element={<SignOutPage />}
        />
      </Routes>
    </div>
  );
};

export default App;
