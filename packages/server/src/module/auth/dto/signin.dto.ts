import { USER_ENTITY } from '@common/const';
import { ISigninDto } from '@common/types';
import { IsString, Matches, MaxLength, MinLength, IsNotEmpty, IsEmail } from 'class-validator';

export class SigninDto implements ISigninDto {
  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @IsString()
  @MinLength(USER_ENTITY.passwordMinLength)
  @MaxLength(USER_ENTITY.passwordMaxLength)
  // TODO: 정규식 특수문자 넣기
  @Matches(/^[a-zA-Z0-9]*$/, {
    message: 'auth.password-error',
  })
  password!: string;
}
