import { useAuth } from '@/apis/auth';
import { AppNavBar } from './common/components';
import { SignInPage } from './pages/sign-in';

const App = () => {
  useAuth();

  return (
    <div>
      <AppNavBar />
      <SignInPage />
    </div>
  );
};

export default App;
