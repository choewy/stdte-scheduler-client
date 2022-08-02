import { Body, Controller, Get, Patch } from '@nestjs/common';
import {
  ApiBasicAuth,
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { CurrentUser } from 'src/commons/decorators';
import { EditUserProfileDto } from './dto';
import { User } from './entities';
import { UserService } from './user.service';

@Controller('user')
@ApiTags('사용자 API')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/me')
  @ApiBasicAuth('bearer')
  @ApiOperation({
    summary: '사용자 계정 정보 조회',
  })
  async getProfile(@CurrentUser() user: User) {
    return await this.userService.getUserProfile(user.id);
  }

  @Patch('/me')
  @ApiConsumes('application/x-www-form-urlencoded')
  @ApiBasicAuth('bearer')
  @ApiOperation({
    summary: '사용자 계정 정보 수정',
  })
  @ApiBody({ type: EditUserProfileDto })
  async editProfile(@Body() editUserProfileDto: EditUserProfileDto) {
    return editUserProfileDto;
  }

  @Get('cash/:how')
  async getCashList(@CurrentUser() user: User) {
    return await HTMLDListElemen;
  }
}
