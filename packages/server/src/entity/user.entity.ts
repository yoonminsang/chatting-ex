import { Column, Entity } from 'typeorm';
import { USER_ENTITY } from '@monorepo/common';
import { AutoUUIdEntity } from './abstract/auto-uuid.entity';

@Entity()
export class User extends AutoUUIdEntity {
  @Column({ unique: true })
  email!: string;

  @Column({ unique: true, length: USER_ENTITY.usernameMaxLength })
  username!: string;

  @Column({ length: USER_ENTITY.hashPasswordLength })
  password!: string;
}
