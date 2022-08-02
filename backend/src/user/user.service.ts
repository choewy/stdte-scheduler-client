import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EditUserProfileDto } from './dto';
import { User } from './entities';
import { UserRepository } from './repositories';
import { UserException } from './user.exception';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: UserRepository,
    private readonly userException: UserException,
  ) {}

  async getUserProfile(userId: string): Promise<User> {
    const user = await this.userRepository.getProfile(userId);

    if (!user) {
      this.userException.userNotFound();
    }

    return user;
  }

  async editUserProfile(
    userId: string,
    editUserProfileDto: EditUserProfileDto,
  ): Promise<void> {
    const { matchedCount } = await this.userRepository.editProfile(
      userId,
      editUserProfileDto,
    );

    if (!matchedCount) {
      this.userException.userNotFound();
    }
  }
}
