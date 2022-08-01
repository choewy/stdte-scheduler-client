import { Body, Controller, Get, Patch } from '@nestjs/common';
import { EditUserProfileDto } from './dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/me')
  async getProfile() {
    return 'getProfile';
  }

  // TODO : DTO class
  @Patch('/me')
  async editProfile(@Body() editUserProfileDto: EditUserProfileDto) {
    return editUserProfileDto;
  }
}
