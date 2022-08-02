import { Exception } from 'src/commons/exception';
import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class UserException extends Exception {
  userNotFound() {
    throw new NotFoundException({
      statusCode: HttpStatus.NOT_FOUND,
      message: 'User Not Found',
    });
  }
}
