import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { comparePassword, hashPassword } from '../../utils/crypto.util';
import { SigninDto } from './dto/signin.dto';
import { SignupDto } from './dto/signup.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class AuthService {
  constructor(@InjectRepository(UserRepository) private readonly userRepository: UserRepository) {}

  public async signup(signupDto: SignupDto): Promise<void> {
    const { email, username, password } = signupDto;
    this.signupValidation(email, username);
    const hashedPassword = await hashPassword(password);
    const user = this.userRepository.create({ email, username, password: hashedPassword });
    await this.userRepository.save(user);
  }

  private async signupValidation(email: string, username: string) {
    const isExistEmail = await this.userRepository.findOne({ where: { email } });
    if (isExistEmail) throw new ConflictException('auth.eixist-email');
    const isExistUserName = await this.userRepository.findOne({ where: { username } });
    if (isExistUserName) throw new ConflictException('auth.exist-username');
  }

  public async signin(signinDto: SigninDto) {
    const { email, password } = signinDto;
    const user = await this.userRepository.findOne({ select: ['password'], where: { email } });
    if (!user) throw new ConflictException('auth.not-found-user');
    await this.passwordValidation(password, user.password);
    // TODO: 토큰
  }

  private async passwordValidation(reqPassword: string, dbPassword: string) {
    const compare = await comparePassword(reqPassword, dbPassword);
    // TODO: 로그 제거
    console.log('password compare', compare);
    if (!compare) throw new UnauthorizedException('auth.password-invalid');
  }
}
