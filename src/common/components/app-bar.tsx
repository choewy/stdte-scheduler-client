import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Avatar,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { authState } from '@/states';

export const AppNavBar: FC = () => {
  const auth = useRecoilValue(authState);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            STDTE
          </Typography>
          {auth ? (
            <IconButton sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
          ) : (
            <Button color="inherit">로그인</Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
