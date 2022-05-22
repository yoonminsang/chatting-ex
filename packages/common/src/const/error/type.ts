export type TConstError<T extends string> = Record<
  T,
  {
    message: string;
    statusCode: number;
  }
>;
