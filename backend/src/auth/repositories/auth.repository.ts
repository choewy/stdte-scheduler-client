import { Repository } from 'typeorm';
import { Auth } from '../entities';
import { dataSourceProvider } from 'src/commons/providers';
import { SaveAuthDto } from '../dto/save-auth.dto';

export class AuthRepository extends Repository<Auth> {
  this: Repository<Auth>;
  saveAuth: (saveAuthDto: SaveAuthDto) => Promise<Auth>;
}

const methods: Partial<AuthRepository> = {
  async saveAuth(saveAuthDto) {
    return await this.save(saveAuthDto);
  },
};

export const AuthRepositoryProvider = dataSourceProvider(Auth, methods);
