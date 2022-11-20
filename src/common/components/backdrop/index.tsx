import { FC } from 'react';
import { Backdrop, CircularProgress } from '@mui/material';

export type AppSuspenseProps = {
  open: boolean;
};

export const AppSuspense: FC<AppSuspenseProps> = ({ open }) => {
  return (
    <Backdrop
      sx={{
        color: '#fff',
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      open={open}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};
