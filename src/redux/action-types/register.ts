import { IUser } from '../interfaces/user.interface';

export const REGISTER_LOADING = 'REGISTER_LOADING';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';

export interface RegisterLoading {
  type: typeof REGISTER_LOADING;
}

export interface RegisterFail {
  type: typeof REGISTER_FAIL;
  payload: string;
}

export interface RegisterSuccess {
  type: typeof REGISTER_SUCCESS;
  payload: IUser;
}

export type RegisterDispatchTypes = RegisterLoading | RegisterFail | RegisterSuccess;
