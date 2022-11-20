export type ExceptionResponse = {
  status: number;
  name: string;
  details: {
    name: string;
    message: string;
  } | null;
};
