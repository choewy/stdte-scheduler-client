import { configs } from 'src/configs';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

export const AppConfigModule = ConfigModule.forRoot({
  isGlobal: true,
  load: configs,
});

export const AppTypeOrmModule = TypeOrmModule.forRootAsync({
  inject: [ConfigService],
  useFactory: (configService: ConfigService) =>
    configService.get<TypeOrmModuleOptions>('typeorm'),
});
