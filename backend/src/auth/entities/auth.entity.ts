import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum Platform {
  kakao = 'kakao',
  gmail = 'gmail',
  twitch = 'twitch',
}

@Entity()
export class Auth {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Column('varchar')
  platform: Platform;

  @Column('varchar')
  accessToken: string;

  @Column('varchar')
  refreshToken: string;

  @CreateDateColumn()
  signedAt: Date;
}
