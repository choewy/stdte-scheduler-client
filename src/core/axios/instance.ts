import axios, { AxiosRequestConfig } from 'axios';
import { AxiosConfig, axiosConfig } from '../configs';
import { CookieInstance } from '../cookies';

export class AxiosInstance extends CookieInstance {
  protected get request() {
    return axios.create(
      Object.assign<AxiosConfig, Partial<AxiosRequestConfig>>(axiosConfig, {
        headers: {
          Authorization: this.accessToken && `Bearer ${this.accessToken}`,
        },
      }),
    );
  }
}
