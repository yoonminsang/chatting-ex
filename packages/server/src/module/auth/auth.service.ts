import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { comparePassword, hashPassword } from './auth.util';
import { SigninDto } from './dto/signin.dto';
import { SignupDto } from './dto/signup.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository) private readonly userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  public async signup(signupDto: SignupDto) {
    const { email, username, password } = signupDto;
    const err = await this.signupValidation(email, username);
    if (err) throw new ConflictException(err);

    const hashedPassword = await hashPassword(password);
    await this.userRepository.createUser({ email, username, password: hashedPassword });
  }

  private async signupValidation(email: string, username: string): Promise<string | undefined> {
    const isExistEmail = await this.userRepository.findOne({ where: { email } });
    if (isExistEmail) return 'auth.eixist-email';
    const isExistUserName = await this.userRepository.findOne({ where: { username } });
    if (isExistUserName) return 'auth.exist-username';
  }

  public async signin(signinDto: SigninDto) {
    const { email, password } = signinDto;
    const user = await this.userRepository.findOne({ where: { email } });
    if (!user) throw new ConflictException('auth.not-found-user');
    const err = await this.passwordValidation(password, user.password);
    if (err) throw new UnauthorizedException(err);

    const { id, username } = user;
    const payload = { id, email, username };
    const accessToken = this.jwtService.sign(payload);
    const refreshToken = this.jwtService.sign(payload);
    return { accessToken, refreshToken };
  }

  private async passwordValidation(reqPassword: string, dbPassword: string) {
    const compare = await comparePassword(reqPassword, dbPassword);
    if (!compare) return 'auth.password-invalid';
  }
}
