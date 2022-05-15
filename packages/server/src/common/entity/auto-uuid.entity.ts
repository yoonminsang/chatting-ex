import { Generated, PrimaryColumn } from 'typeorm';
import { BaseTimeEntity } from './base-time.entity';

export abstract class AutoUUIdEntity extends BaseTimeEntity {
  @PrimaryColumn({ type: 'char', length: 36 })
  @Generated('uuid')
  id!: string;
}
