import { FC, Fragment } from 'react';
import { Divider, List } from '@mui/material';
import { AppSideBarListItem } from './side-bar-list-item';
import { RoutePath } from '@/common/constants';

export type AppSideBarListProps = {
  items: RoutePath[];
};

export const AppSideBarList: FC<AppSideBarListProps> = ({ items }) => {
  return (
    <Fragment>
      <List>
        {items.map((item) => (
          <AppSideBarListItem key={JSON.stringify(item)} item={item} />
        ))}
      </List>
      <Divider />
    </Fragment>
  );
};
