import { UserStatus, UserType } from './enums';

export type AuthResponseType = {
  id: number;
  type: UserType;
  status: UserStatus;
  name: string;
  email: string;
};

export type TokenResponseType = {
  accessToken: string;
  refreshToken: string;
};

export type SignInBodyType = {
  email: string;
  password: string;
};

export type SignUpBodyType = SignInBodyType & {
  name: string;
  confirmPassword: string;
};
