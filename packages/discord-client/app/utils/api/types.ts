import { RequestError } from './constants';

export interface Response {
  error?: RequestError;
  success: boolean;
  data: unknown;
}
