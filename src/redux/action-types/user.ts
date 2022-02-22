import { IUser } from '../interfaces/user.interface';

export const PROFILE_LOADING = 'PROFILE_LOADING';
export const PROFILE_FAIL = 'PROFILE_FAIL';
export const PROFILE_SUCCESS = 'PROFILE_SUCCESS';

export interface ProfileLoading {
  type: typeof PROFILE_LOADING;
}

export interface ProfileFail {
  type: typeof PROFILE_FAIL;
  payload: string;
}

export interface ProfileSuccess {
  type: typeof PROFILE_SUCCESS;
  payload: IUser;
}

export type ProfileDispatchTypes = ProfileLoading | ProfileFail | ProfileSuccess;
