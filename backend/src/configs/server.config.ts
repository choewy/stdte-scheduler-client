import { registerAs } from '@nestjs/config';

declare global {
  interface ServerConfigs {
    port: number;
    cors: {
      origin: string;
      credentials: boolean;
    };
  }
}

export default registerAs(
  'server',
  (): ServerConfigs => ({
    port: Number(process.env.SERVER_PORT || '3000'),
    cors: {
      origin: String(process.env.CORS_ORIGIN || 'localhost:3000'),
      credentials: Boolean(process.env.CORS_CREDENTIALS || 'false'),
    },
  }),
);
