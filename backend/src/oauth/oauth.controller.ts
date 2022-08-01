import { Controller, Get } from '@nestjs/common';
import { OAuthService } from './oauth.service';

@Controller('oauth')
export class OAuthController {
  constructor(private readonly oauthService: OAuthService) {}

  @Get('kakao')
  async signWithKakao() {
    return 'kakao';
  }

  @Get('twitch')
  async signWithTwitch() {
    return 'twitch';
  }

  @Get('gmail')
  async signWithGmail() {
    return 'gmail';
  }

  @Get('refresh')
  async refreshToken() {
    return 'refreshToken';
  }
}
