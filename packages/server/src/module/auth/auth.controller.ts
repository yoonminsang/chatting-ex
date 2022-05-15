import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SigninDto } from './dto/signin.dto';
import { SignupDto } from './dto/signup.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signup(@Body(ValidationPipe) signupDto: SignupDto): Promise<void> {
    return this.authService.signup(signupDto);
  }

  @Post('/signin')
  // TODO: 타입수정
  signIn(@Body(ValidationPipe) signinDto: SigninDto): Promise<any> {
    return this.authService.signin(signinDto);
  }
}
