import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestFastifyApplication } from '@nestjs/platform-fastify';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SWAGGER_SETTING } from './commons/constants';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule);

  // Get configurations
  const { port, cors } = app.get(ConfigService).get<ServerConfigs>('server');

  // Setting CORS
  app.enableCors(cors);

  // Setting Global Pipes
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      disableErrorMessages: true,
      validationError: {
        target: true,
        value: false,
      },
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  // Setting Swagger
  const swaggerBuilder = new DocumentBuilder()
    .setTitle(SWAGGER_SETTING.title)
    .setDescription(SWAGGER_SETTING.description)
    .setVersion(SWAGGER_SETTING.version)
    .addBearerAuth(SWAGGER_SETTING.bearer)
    .build();
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerBuilder);
  SwaggerModule.setup('/docs', app, swaggerDocument);

  // Run Server
  await app.listen(port);
}

bootstrap();
