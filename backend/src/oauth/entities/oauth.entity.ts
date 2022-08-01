import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

declare global {
  type OAuthPlatform = 'gmail' | 'kakao' | 'twitch';
}

@Entity()
export class OAuth {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Column('varchar')
  platform: OAuthPlatform;

  @Column('varchar')
  accessToken: string;

  @Column('varchar')
  refreshToken: string;

  @CreateDateColumn()
  signedAt: Date;
}
