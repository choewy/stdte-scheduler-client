import { resolve } from 'path';
import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const entitiesPath = resolve(__dirname + './../**/entities/*.entity{.ts,.js}');

export default registerAs(
  'typeorm',
  (): TypeOrmModuleOptions => ({
    type: 'mysql',
    host: String(process.env.DATABASE_HOST || '127.0.0.1'),
    port: Number(process.env.DATABASE_PORT || '3306'),
    username: String(process.env.DATABASE_USER || 'root'),
    password: String(process.env.DATABASE_PASSWORD || 'root'),
    database: String(process.env.DATABASE_DBNAME || ''),
    entities: [entitiesPath],
    synchronize: true,
    logging: true,
  }),
);
