import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cash } from './entities';
import { CashRepository } from './repositories';

@Injectable()
export class CashService {
  constructor(
    @InjectRepository(Cash) private readonly cashRepository: CashRepository,
  ) {}
}
