export class CreateUserDto {
  readonly platform: OAuthPlatform;
  readonly email: string;
  readonly accessToken: string;
  readonly refreshToken: string;
}
