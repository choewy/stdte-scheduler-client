import { FC, useCallback, useEffect } from 'react';
import { authApi, UserStatus } from '@/apis/auth';
import { useSetSnakbarCallback } from '@/common/callbacks';
import { RoutePath } from '@/common/constants';
import { authState } from '@/states';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

const AuthPage: FC = () => {
  const navigate = useNavigate();

  const setAuth = useSetRecoilState(authState);
  const setSnackbar = useSetSnakbarCallback();

  const checkAuth = useCallback(async () => {
    try {
      const { data } = await authApi.auth();

      setAuth(data);

      if (data.status === UserStatus.Wait) {
        return navigate(RoutePath.Wait.url[0], { replace: true });
      }

      if (data.status === UserStatus.Reject) {
        return navigate(RoutePath.Block.url[0], { replace: true });
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
