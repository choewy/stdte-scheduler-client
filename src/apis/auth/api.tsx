import { AxiosInstance, HttpMethod } from '@/core/axios';
import { AxiosResponse } from 'axios';
import {
  AuthResponseType,
  SignInBodyType,
  SignUpBodyType,
  TokenResponseType,
} from './types';

class AuthApi extends AxiosInstance {
  private readonly URL = '/auth';

  getAccessToken(): string {
    return this.accessToken;
  }

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
