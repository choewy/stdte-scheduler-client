import { Module } from '@nestjs/common';
import { AppConfigModule, AppTypeOrmModule } from './commons/modules';
import { AppController } from './app.controller';
import { UserModule } from './user/user.module';
import { OAuthModule } from './oauth/oauth.module';

@Module({
  imports: [AppConfigModule, AppTypeOrmModule, UserModule, OAuthModule],
  controllers: [AppController],
})
export class AppModule {}
