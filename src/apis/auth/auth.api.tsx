import { AxiosInstance, ExceptionResponse, HttpMethod } from '@/core/axios';
import { authState } from '@/states';
import { AxiosError, AxiosResponse } from 'axios';
import { useCallback, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import {
  AuthResponseType,
  SignInBodyType,
  SignUpBodyType,
  TokenResponseType,
} from './types';

class AuthApi extends AxiosInstance {
  private readonly URL = '/auth';

  async setCookies({
    accessToken,
    refreshToken,
  }: TokenResponseType): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
        resolve(undefined);
      } catch (e) {
        reject(e);
      }
    });
  }

  async resetCookie(): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        this.reset();
        resolve(undefined);
      } catch (e) {
        reject(e);
      }
    });
  }

  async auth(): Promise<AxiosResponse<AuthResponseType>> {
    return this.request({
      method: HttpMethod.Get,
      url: this.URL,
    });
  }

  async signIn(
    data: SignInBodyType,
  ): Promise<AxiosResponse<TokenResponseType>> {
    return this.request({
      method: HttpMethod.Post,
      url: `${this.URL}/signin`,
      data,
    });
  }

  async signUp(
    data: SignUpBodyType,
  ): Promise<AxiosResponse<TokenResponseType>> {
    return this.request({
      method: HttpMethod.Post,
      url: `${this.URL}/signup`,
      data,
    });
  }
}

export const authApi = new AuthApi();

export const useAuth = () => {
  const setAuth = useSetRecoilState(authState);
  const apiCall = useCallback(async () => {
    try {
      const { data } = await authApi.auth();
      setAuth(data);
    } catch (e) {
      const error = e as AxiosError<ExceptionResponse>;

      if (error.response?.data) {
        const { name } = error.response.data as ExceptionResponse;

        setAuth(null);

        switch (name) {
          case 'JwtInvalid':
            return authApi.resetCookie();

          case 'JwtExpired':
            return alert(name);
        }
      }
    }
  }, [setAuth]);

  useEffect(() => {
    apiCall();
  }, [apiCall]);
};
