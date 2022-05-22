import { HttpException } from '@nestjs/common';
import { TAUTHErrorValue, TCommonErrorValue } from '@monorepo/common';

type TErrorValue = TCommonErrorValue | TAUTHErrorValue;

export const errorGenerator = ({ message, statusCode }: TErrorValue) => {
  throw new HttpException(message, statusCode);
};

// TODO: 에러나게 처리
errorGenerator({ message: 'sdf', statusCode: 400 });
