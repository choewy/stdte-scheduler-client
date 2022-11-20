import { AxiosRequestConfig } from 'axios';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      [key: string]: string;
    }
  }
}

export type AxiosConfig = AxiosRequestConfig;
