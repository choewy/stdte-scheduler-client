import { Repository } from 'typeorm';
import { User } from 'src/user/entities';
import { dataSourceProvider } from 'src/commons/providers';
import { SignInOAuthDto } from '../dto';

export class UserRepository extends Repository<User> {
  this: Repository<User>;
  createUser: (signInOAuthDto: SignInOAuthDto) => Promise<User>;
  deleteUser: () => Promise<void>;
}

const methods: Partial<UserRepository> = {
  // Create New User Data
  async createUser(signInOAuthDto) {
    return await this.save(signInOAuthDto);
  },

  // Delete(soft) User
  async deleteUser() {
    return;
  },
};

export const UserRepositoryProvider = dataSourceProvider(User, methods);
