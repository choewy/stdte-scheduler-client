import { authApi } from '@/apis/auth';
import { useSetSnakbarCallback } from '@/common/callbacks';
import { RoutePath } from '@/common/constants';
import { authState } from '@/states';
import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useResetRecoilState } from 'recoil';

const SignOutPage = () => {
  const navigate = useNavigate();
  const resetAuth = useResetRecoilState(authState);
  const setSnackbar = useSetSnakbarCallback();

  const onSignOutEvent = useCallback(async () => {
    await authApi.resetCookie();

    resetAuth();
    setSnackbar('로그인 페이지로 이동합니다.', 'info');
    navigate(RoutePath.SignIn.url[0], { replace: true });
  }, []);

  useEffect(() => {
    onSignOutEvent();
  }, [onSignOutEvent]);

  return <></>;
};

export default SignOutPage;
