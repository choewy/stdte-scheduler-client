import { FC } from 'react';

import { useAuthChecking } from '@/apis/auth';
import {
  AuthPage,
  BlockPage,
  HomePage,
  SignInPage,
  SignOutPage,
  SignUpPage,
  TeamPage,
  WaitPage,
} from '@/pages';
import { Route, Routes } from 'react-router-dom';
import { RoutePath } from '@/common/constants';
import TeamsPage from '@/pages/teams';

const App: FC = () => {
  useAuthChecking();

  return (
    <div>
      <Routes>
        <Route path={RoutePath.Home.url[0]} element={<HomePage />} />
        <Route path={RoutePath.Auth.url[0]} element={<AuthPage />} />
        <Route path={RoutePath.Wait.url[0]} element={<WaitPage />} />
        <Route path={RoutePath.Block.url[0]} element={<BlockPage />} />
        <Route path={RoutePath.SignIn.url[0]} element={<SignInPage />} />
        <Route path={RoutePath.SignUp.url[0]} element={<SignUpPage />} />
        <Route
          path={RoutePath.SignOut.url.join('')}
          element={<SignOutPage />}
        />
        <Route path={RoutePath.Teams.url[0]}>
          <Route path="" element={<TeamsPage />} />
          <Route
            path={RoutePath.Teams.url[1] as string}
            element={<TeamPage />}
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
