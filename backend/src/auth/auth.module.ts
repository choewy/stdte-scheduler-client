import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { Auth } from './entities';
import { AuthRepositoryProvider, UserRepositoryProvider } from './repositories';

@Module({
  imports: [TypeOrmModule.forFeature([User, Auth])],
  providers: [UserRepositoryProvider, AuthRepositoryProvider, AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
