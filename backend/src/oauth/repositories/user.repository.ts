import { Repository } from 'typeorm';
import { User } from 'src/user/entities';
import { dataSourceProvider } from 'src/commons/providers';

export class UserRepository extends Repository<User> {
  this: Repository<User>;
  createUser: () => Promise<User>;
  deleteUser: () => Promise<void>;
}

const methods: Partial<UserRepository> = {
  // Create New User Data
  async createUser() {
    return new User();
  },

  // Delete(soft) User
  async deleteUser() {
    return;
  },
};

export const UserRepositoryProvider = dataSourceProvider(User, methods);
