import { COMMON_ERROR, AUTH_ERROR, TCommonErrorValue } from '@/const';

export interface ISigninDto {
  email: string;
  password: string;
}

// TODO: 바꿔야해
export type SigninError = TCommonErrorValue | typeof AUTH_ERROR.invalidPassword;
