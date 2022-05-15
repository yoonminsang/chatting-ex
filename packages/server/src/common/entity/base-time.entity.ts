import { CreateDateColumn, UpdateDateColumn, BaseEntity } from 'typeorm';

export abstract class BaseTimeEntity extends BaseEntity {
  @CreateDateColumn({ type: 'datetime' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'datetime' })
  updatedAt!: Date;
}
