import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { Cash, User } from './entities';
import { CashRepositoryProvider, UserRepositoryProvider } from './repositories';
import { UserService } from './user.service';
import { UserException } from './user.exception';

@Module({
  imports: [TypeOrmModule.forFeature([User, Cash])],
  providers: [
    UserRepositoryProvider,
    CashRepositoryProvider,
    UserService,
    UserException,
  ],
  controllers: [UserController],
})
export class UserModule {}
