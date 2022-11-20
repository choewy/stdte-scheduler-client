import Cookies, { CookieSetOptions } from 'universal-cookie';
import { CookieKey } from './enums';

const cookies = new Cookies();

export class CookieInstance {
  private readonly options: CookieSetOptions = {
    path: '*',
  };

  protected get accessToken() {
    return cookies.get(CookieKey.AccessToken);
  }

  protected get refreshToken() {
    return cookies.get(CookieKey.RefreshToken);
  }

  protected set accessToken(token: string) {
    cookies.set(CookieKey.AccessToken, token, this.options);
  }

  protected set refreshToken(token: string) {
    cookies.set(CookieKey.RefreshToken, token, this.options);
  }

  protected reset() {
    cookies.remove(CookieKey.AccessToken, this.options);
    cookies.remove(CookieKey.RefreshToken, this.options);
  }
}
