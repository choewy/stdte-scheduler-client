import { FC, KeyboardEvent, MouseEvent, useCallback } from 'react';
import { Box, Drawer } from '@mui/material';
import { useRecoilState, useRecoilValue } from 'recoil';
import { appState, authState } from '@/states';
import { AppSideBarList } from './side-bar-list';
import { RouteGroup, RoutePath } from '@/common/constants';

export const AppSideBar: FC = () => {
  const [{ openSidebar }, setAppSetting] = useRecoilState(appState);
  const auth = useRecoilValue(authState);

  const onCloseEvent = useCallback(
    (e: KeyboardEvent | MouseEvent) => {
      if (
        e.type === 'keydown' &&
        ((e as React.KeyboardEvent).key === 'Tab' ||
          (e as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setAppSetting((prev) => ({
        ...prev,
        openSidebar: false,
      }));
    },
    [setAppSetting],
  );

  return (
    <Drawer anchor="left" open={openSidebar} onClose={onCloseEvent}>
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={onCloseEvent}
        onKeyDown={onCloseEvent}
      >
        <AppSideBarList items={RoutePath.findByGroup(RouteGroup.CommonTop)} />

        <AppSideBarList
          items={RoutePath.findByGroup(
            auth ? RouteGroup.UserTop : RouteGroup.VisitorTop,
          )}
        />

        <AppSideBarList items={RoutePath.findByGroup(RouteGroup.Outer)} />

        {auth && (
          <AppSideBarList
            items={RoutePath.findByGroup(RouteGroup.UserBottom)}
          />
        )}
      </Box>
    </Drawer>
  );
};
