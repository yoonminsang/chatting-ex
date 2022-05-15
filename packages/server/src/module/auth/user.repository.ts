import { EntityRepository, Repository } from 'typeorm';
import { User } from '../../entity/user.entity';
import { SignupDto } from './dto/signup.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(signupDto: SignupDto) {
    const user = this.create(signupDto);
    await this.save(user);
  }
}
