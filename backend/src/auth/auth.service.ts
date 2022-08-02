import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities';
import { Auth } from './entities';
import { AuthRepository, UserRepository } from './repositories';
import { SignInOAuthDto } from './dto';
import { Platform } from './entities/auth.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: UserRepository,

    @InjectRepository(Auth)
    private readonly authRepository: AuthRepository,
  ) {}

  async signInWithOAuth(platform: Platform, signInOAuthDto: SignInOAuthDto) {
    const { kakaoId, gmailId, twitchId } = signInOAuthDto;
    const platformId = kakaoId || gmailId || twitchId;

    let user: User | null;
    user = await this.userRepository.findOne({
      where: { [platformId]: platformId },
    });

    if (!user) {
      user = await this.userRepository.createUser(signInOAuthDto);
    }

    return await this.authRepository.saveAuth({
      platform,
      accessToken: '{ platform, user.id }',
      refreshToken: 'refreshToken',
    });
  }
}
