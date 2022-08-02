import { Repository } from 'typeorm';
import { Cash } from '../entities';
import { dataSourceProvider } from 'src/commons/providers';

export class CashRepository extends Repository<Cash> {
  this: Repository<Cash>;
}

const methods: Partial<CashRepository> = {};

export const CashRepositoryProvider = dataSourceProvider(Cash, methods);
