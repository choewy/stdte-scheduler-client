import { atom } from 'recoil';

export type AppStateType = {
  openSidebar: boolean;
};

export const appState = atom<AppStateType>({
  key: 'appState',
  default: {
    openSidebar: false,
  },
});
