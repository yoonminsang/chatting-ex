import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig = (): TypeOrmModuleOptions => ({
  type: 'mysql',
  host: process.env.RDB_HOST || 'localhost',
  port: Number(process.env.RDB_PORT) || 3306,
  username: process.env.RDB_USERNAME || 'root',
  password: process.env.RDB_PASSWORD || '',
  database: process.env.RDB_DATABASE || 'database',
  entities: [`${__dirname}/src/entity/*.entity.{js,ts}`],
  synchronize: process.env.NODE_ENV !== 'production',
});
