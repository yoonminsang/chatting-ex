import { TConstError } from '../type';

type TAuthErrorKey = 'invalidPassword';
export type TAUTHErrorValue = typeof AUTH_ERROR[keyof typeof AUTH_ERROR];
export const AUTH_ERROR: TConstError<TAuthErrorKey> = {
  invalidPassword: {
    message: 'auth/invalid-password',
    statusCode: 401,
  },
} as const;
