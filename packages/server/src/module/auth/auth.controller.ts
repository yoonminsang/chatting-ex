import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDto } from './dto/signup.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signup(@Body(ValidationPipe) signupDto: SignupDto): Promise<void> {
    return this.authService.signup(signupDto);
  }

  @Post('/signin')
  signIn(@Body(ValidationPipe) signinDto: SignupDto): Promise<void> {
    return this.authService.signin(signinDto);
  }
}
