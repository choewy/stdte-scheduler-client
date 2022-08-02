import { User } from 'src/user/entities';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum PaymentMethod {
  card = 'card',
  mobild = 'modile',
  point = 'point',
}

@Entity()
export class Cash {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Column('varchar')
  paymentMethod: PaymentMethod;

  @Column('int')
  amount: number;

  @Column('varchar')
  receiptUrl: string;

  @Column('varchar')
  description: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  userId: string;
}
