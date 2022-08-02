import { HttpStatus, InternalServerErrorException } from '@nestjs/common';

export abstract class Exception {
  databaseException(error: unknown) {
    throw new InternalServerErrorException({
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      message: 'DB-Error',
      error,
    });
  }
}
