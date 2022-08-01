import { SecuritySchemeObject } from '@nestjs/swagger/dist/interfaces/open-api-spec.interface';

interface SwaggerSetting {
  title: string;
  description: string;
  version: string;
  bearer: SecuritySchemeObject;
}

export const SWAGGER_SETTING: SwaggerSetting = {
  title: 'Trineedle Pilot Project API',
  description: 'Trineedle Pilot Project(#1 weeks)',
  version: '1.0.0',
  bearer: {
    type: 'http',
    scheme: 'bearer',
    name: 'JWT',
    in: 'header',
  },
};
