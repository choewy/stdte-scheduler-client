import { FC } from 'react';
import { AppBar, Box, Toolbar } from '@mui/material';
import { AppNavBarHeader } from './nav-bar-header';
import { AppNavBarIconButton } from './nav-bar-icon';
import { AppNavBarMenus } from './nav-bar-menus';

export const AppNavBar: FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <AppNavBarIconButton />
          <AppNavBarHeader />
          <AppNavBarMenus />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
