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
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~!@#$%^&*()-=_+])[A-Za-z\d~!@#$%^&*()-=_+]{8,}/, {
    message: 'auth.password-error',
  })
  password!: string;
}
