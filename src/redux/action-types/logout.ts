export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export interface LogoutSuccess {
  type: typeof LOGOUT_SUCCESS;
  payload: any;
}

export type LogoutDispatchTypes = LogoutSuccess;
