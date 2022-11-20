import { useAuth } from '@/apis/auth';
import { AppNavBar, AppSideBar } from './common/components';
import { SignInPage } from './pages/sign-in';

const App = () => {
  useAuth();

  return (
    <div>
      <AppNavBar />
      <AppSideBar />
      <SignInPage />
    </div>
  );
};

export default App;
