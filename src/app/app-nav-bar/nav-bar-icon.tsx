import { FC, useCallback } from 'react';
import { IconButton } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useSetRecoilState } from 'recoil';
import { appState } from '@/states';

export const AppNavBarIconButton: FC = () => {
  const setAppSetting = useSetRecoilState(appState);

  const onOpenEvent = useCallback(() => {
    setAppSetting((prev) => ({
      ...prev,
      openSidebar: true,
    }));
  }, [setAppSetting]);

  return (
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={{ mr: 2 }}
      onClick={onOpenEvent}
    >
      <MenuIcon />
    </IconButton>
  );
};
