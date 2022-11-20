import { RoutePath } from '@/common/constants';
import { authState } from '@/states';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { UserStatus } from './enums';
import { authApi } from './api';

export const useAuthChecking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const auth = useRecoilValue(authState);

  useEffect(() => {
    if (auth) {
      if (
        auth.status === UserStatus.Wait &&
        location.pathname !== RoutePath.Wait.url[0]
      ) {
        navigate(RoutePath.Wait.url[0], { replace: true });
      }

      if (
        auth.status === UserStatus.Reject &&
        location.pathname !== RoutePath.Block.url[0]
      ) {
        navigate(RoutePath.Block.url[0], { replace: true });
      }

      return;
    }

    if (!auth) {
      const accessToken = authApi.getAccessToken();

      if (accessToken) {
        if (!RoutePath.getSignPaths().includes(location.pathname)) {
          navigate(RoutePath.Auth.url[0], {
            replace: true,
            state: {
              pathname: location.pathname,
            },
          });
        }
      }

      if (!accessToken) {
        if (!RoutePath.getVisitorPaths().includes(location.pathname)) {
          navigate(RoutePath.SignIn.url[0], { replace: true });
        }
      }
    }
  }, []);
};
