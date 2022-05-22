import { TConstError } from '../type';

type TCommonErrorKey = 'notFound' | 'unauthorized' | 'forbidden';
export type TCommonErrorValue = typeof COMMON_ERROR[keyof typeof COMMON_ERROR];
export const COMMON_ERROR: TConstError<TCommonErrorKey> = {
  notFound: {
    message: 'common/not-found',
    statusCode: 404,
  },
  unauthorized: {
    message: 'common/unauthorized',
    statusCode: 401,
  },
  forbidden: {
    message: 'common/forbidden',
    statusCode: 401,
  },
} as const;
