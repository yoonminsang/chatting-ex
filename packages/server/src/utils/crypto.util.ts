import * as bcrypt from 'bcryptjs';

const hashPassword = (password: string): Promise<string> => {
  const hashSaltRound = Number(process.env.HASH_SALT_ROUND);
  return bcrypt.hash(password, hashSaltRound);
};

const comparePassword = (reqPassword: string, dbPassword: string): Promise<boolean> => {
  return bcrypt.compare(reqPassword, dbPassword);
};

export { hashPassword, comparePassword };
