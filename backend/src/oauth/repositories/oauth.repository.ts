import { Repository } from 'typeorm';
import { OAuth } from '../entities';
import { dataSourceProvider } from 'src/commons/providers';

export class OAuthRepository extends Repository<OAuth> {
  this: Repository<OAuth>;
  createUser: () => Promise<OAuth>;
}

const methods: Partial<OAuthRepository> = {};

export const OAuthRepositoryProvider = dataSourceProvider(OAuth, methods);
