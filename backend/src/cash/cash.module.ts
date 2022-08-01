import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CashController } from './cash.controller';
import { CashService } from './cash.service';
import { Cash } from './entities';
import { CashRepositoryProvider } from './repositories';

@Module({
  imports: [TypeOrmModule.forFeature([Cash])],
  providers: [CashRepositoryProvider, CashService],
  controllers: [CashController],
})
export class CashModule {}
