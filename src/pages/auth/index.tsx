import { FC, useCallback, useEffect } from 'react';
import { authApi, UserStatus } from '@/apis/auth';
import { useSetSnakbarCallback } from '@/common/callbacks';
import { RoutePath } from '@/common/constants';
import { authState } from '@/states';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

const AuthPage: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const setAuth = useSetRecoilState(authState);
  const setSnackbar = useSetSnakbarCallback();

  const checkAuth = useCallback(async () => {
    try {
      const { data } = await authApi.auth();

      setAuth(data);

      if (data.status === UserStatus.Wait) {
        navigate(RoutePath.Wait.url[0], { replace: true });
        return;
      }

      if (data.status === UserStatus.Reject) {
        navigate(RoutePath.Block.url[0], { replace: true });
        return;
      }

      if (location.state) {
        const pathname = location.state.pathname;

        if (!RoutePath.getVisitorPaths().includes(pathname)) {
          navigate(pathname, { replace: true });
          return;
        }
      }

      navigate(RoutePath.Home.url[0], { replace: true });
    } catch (e) {
      setSnackbar('인증에 실패하였습니다.', 'warning');
      navigate(RoutePath.SignIn.url[0], { replace: true });
    }
  }, [setAuth, setSnackbar, navigate]);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return <></>;
};

export default AuthPage;
