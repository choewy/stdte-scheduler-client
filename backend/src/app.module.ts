import { Module } from '@nestjs/common';
import { AppConfigModule, AppTypeOrmModule } from './commons/modules';
import { AppController } from './app.controller';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AppConfigModule, AppTypeOrmModule, UserModule, AuthModule],
  controllers: [AppController],
})
export class AppModule {}
