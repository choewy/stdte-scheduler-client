import { FC } from 'react';

import { useAuth } from '@/apis/auth';
import { SignInPage, SignUpPage } from '@/pages';
import { Route, Routes } from 'react-router-dom';
import { RoutePath } from '@/common/constants';

const App: FC = () => {
  useAuth();

  return (
    <div>
      <Routes>
        <Route path={RoutePath.SignIn.url.join('')} element={<SignInPage />} />
        <Route path={RoutePath.SignUp.url.join('')} element={<SignUpPage />} />
      </Routes>
    </div>
  );
};

export default App;
