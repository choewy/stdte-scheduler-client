import { registerAs } from '@nestjs/config';

interface ServerConfigs {
  port: number;
}

export default registerAs(
  'server',
  (): ServerConfigs => ({
    port: Number(process.env.SERVER_PORT || '3000'),
  }),
);
