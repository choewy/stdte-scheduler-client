import { FC, useCallback } from 'react';
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

import { useNavigate } from 'react-router-dom';
import { RoutePath } from '@/common/constants';

export type AppSideBarListItemProps = {
  item: RoutePath;
};

export const AppSideBarListItem: FC<AppSideBarListItemProps> = ({
  item: { url, text, Icon, isBlank },
}) => {
  const navigate = useNavigate();

  const onLinkEvent = useCallback(() => {
    if (isBlank) {
      return window.open(url[0]);
    }

    return navigate(url[0], { replace: true });
  }, [url, isBlank]);

  return (
    <ListItem key={text} disablePadding>
      <ListItemButton onClick={onLinkEvent}>
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
};
