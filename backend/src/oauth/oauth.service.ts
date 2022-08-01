import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities';
import { OAuth } from './entities';
import { OAuthRepository, UserRepository } from './repositories';

@Injectable()
export class OAuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: UserRepository,

    @InjectRepository(OAuth)
    private readonly oauthRepository: OAuthRepository,
  ) {}
}
