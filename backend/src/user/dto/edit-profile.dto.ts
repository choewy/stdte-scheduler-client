import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class EditUserProfileDto {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @ApiPropertyOptional({
    type: String,
    description: '이름',
    example: '최원영',
  })
  readonly name?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsEmail()
  @ApiPropertyOptional({
    type: String,
    description: '이메일',
    example: 'choewy@trineedle.com',
  })
  readonly email?: string;
}
