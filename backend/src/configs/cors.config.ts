import { registerAs } from '@nestjs/config';

interface CorsConfigs {
  origin: string;
  credentials: boolean;
}

export default registerAs(
  'cors',
  (): CorsConfigs => ({
    origin: String(process.env.CORS_ORIGIN || 'localhost:3000'),
    credentials: Boolean(process.env.CORS_CREDENTIALS || 'false'),
  }),
);
