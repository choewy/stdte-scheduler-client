import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { User } from './entities';
import { UserRepositoryProvider } from './repositories';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserRepositoryProvider, UserService],
  controllers: [UserController],
})
export class UserModule {}
