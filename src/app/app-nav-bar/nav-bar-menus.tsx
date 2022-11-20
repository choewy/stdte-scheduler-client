import { FC, useCallback } from 'react';
import { authState } from '@/states';
import { Avatar, Button, IconButton } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '@/common/constants';

export const AppNavBarMenus: FC = () => {
  const navigate = useNavigate();
  const auth = useRecoilValue(authState);

  const onLinkEvent = useCallback(
    (url: string) => () => {
      navigate(url, { replace: true });
    },
    [auth],
  );

  return auth ? (
    <IconButton sx={{ p: 0 }}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
    </IconButton>
  ) : (
    <Button color="inherit" onClick={onLinkEvent(RoutePath.SignIn.url[0])}>
      로그인
    </Button>
  );
};
