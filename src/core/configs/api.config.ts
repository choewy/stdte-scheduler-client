import { AxiosConfig } from './types';

export const axiosConfig: AxiosConfig = {
  baseURL: process.env.REACT_APP_API_BASE_URL,
  withCredentials: process.env.REACT_APP_API_CREDENTIALS === 'true',
};
