import { Body, Controller, Get, Patch } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/me')
  async getProfile() {
    return 'getProfile';
  }

  // TODO : DTO class
  @Patch('/me')
  async editProfile(@Body() editProfileDto: any) {
    return editProfileDto;
  }
}
