import { USER_ENTITY, ISignupDto } from '@monorepo/common';
import { IsString, Matches, MaxLength, MinLength, IsNotEmpty, IsEmail } from 'class-validator';

export class SignupDto implements ISignupDto {
  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(USER_ENTITY.usernameMaxLength)
  username!: string;

  @IsString()
  @MinLength(USER_ENTITY.passwordMinLength)
  @MaxLength(USER_ENTITY.passwordMaxLength)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~!@#$%^&*()-=_+])[A-Za-z\d~!@#$%^&*()-=_+]{8,}/, {
    message: 'auth.password-error',
  })
  password!: string;
}
