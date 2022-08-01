import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export default registerAs(
  'typeorm',
  (): TypeOrmModuleOptions => ({
    host: String(process.env.MYSQL_HOST || '127.0.0.1'),
    port: Number(process.env.MYSQL_PORT || '3306'),
    username: String(process.env.MYSQL_USER || 'root'),
    password: String(process.env.MYSQL_PASSWORD || 'root'),
    database: String(process.env.MYSQL_DBNAME || ''),
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
    logging: true,
  }),
);
