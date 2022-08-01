import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities';
import { OAuth } from './entities';
import {
  OAuthRepositoryProvider,
  UserRepositoryProvider,
} from './repositories';
import { OAuthService } from './oauth.service';
import { OAuthController } from './oauth.controller';

@Module({
  imports: [TypeOrmModule.forFeature([OAuth, User])],
  providers: [OAuthRepositoryProvider, UserRepositoryProvider, OAuthService],
  controllers: [OAuthController],
})
export class OAuthModule {}
