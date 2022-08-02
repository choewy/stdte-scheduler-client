import { Body, Controller, Param, Post } from '@nestjs/common';
import { ApiBasicAuth, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { SignInOAuthDto } from './dto';
import { Platform } from './entities/auth.entity';

@Controller('auth')
@ApiTags('사용자 인증 API')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post(':platform')
  @ApiBasicAuth('bearer')
  @ApiOperation({
    summary: '사용자 OAuth 로그인',
    description: '카카오, Gmail, 트위치',
  })
  @ApiParam({
    name: 'platform',
    enum: Platform,
  })
  async signInWithOAuth(
    @Param('platform') platform: Platform,
    @Body() signInOAuthDto: SignInOAuthDto,
  ) {
    return await this.authService.signInWithOAuth(platform, signInOAuthDto);
  }
}
