import { Repository, UpdateWriteOpResult } from 'typeorm';
import { User } from '../entities';
import { EditUserProfileDto } from '../dto';
import { dataSourceProvider } from 'src/commons/providers';

export class UserRepository extends Repository<User> {
  this: Repository<User>;
  getProfile: (userId: string) => Promise<User | null>;
  editProfile: (
    userId: string,
    editUserProfileDto: EditUserProfileDto,
  ) => Promise<UpdateWriteOpResult>;
}

const methods: Partial<UserRepository> = {
  // Get User Profile Data
  async getProfile(userId) {
    return await this.createQueryBuilder('user')
      .select(['user.name', 'user.email', 'user.createdAt', 'user.updatedAt'])
      .where('user.id = :userId', { userId })
      .getOne();
  },

  // Edit User Profile Data
  async editProfile(userId, userEditProfileDto) {
    return await this.update({ userId }, userEditProfileDto);
  },
};

// get UserRepository from DataSource
export const UserRepositoryProvider = dataSourceProvider(User, methods);
