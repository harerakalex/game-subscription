import { IWithdraw } from '../interfaces/withdraw.interface';

export const WITHDRAW_LOADING = 'WITHDRAW_LOADING';
export const WITHDRAW_FAIL = 'WITHDRAW_FAIL';
export const WITHDRAW_SUCCESS = 'WITHDRAW_SUCCESS';

export interface WithdrawLoading {
  type: typeof WITHDRAW_LOADING;
}

export interface WithdrawFail {
  type: typeof WITHDRAW_FAIL;
  payload: string;
}

export interface WithdrawSuccess {
  type: typeof WITHDRAW_SUCCESS;
  payload: IWithdraw;
}

export type WithdrawDispatchTypes = WithdrawLoading | WithdrawFail | WithdrawSuccess;
