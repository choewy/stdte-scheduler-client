import { AuthResponseType } from '@/apis/auth';
import { atom } from 'recoil';

export const authState = atom<AuthResponseType | null>({
  key: 'authState',
  default: null,
});
