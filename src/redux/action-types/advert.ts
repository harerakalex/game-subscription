import { IAdvert } from '../interfaces/advert.interface';

export const GET_ADVERT_LOADING = 'GET_ADVERT_LOADING';
export const GET_ADVERT_FAIL = 'GET_ADVERT_FAIL';
export const GET_ADVERT_SUCCESS = 'GET_ADVERT_SUCCESS';

export const CREATE_ADVERT_LOADING = 'CREATE_ADVERT_LOADING';
export const CREATE_ADVERT_FAIL = 'CREATE_ADVERT_FAIL';
export const CREATE_ADVERT_SUCCESS = 'CREATE_ADVERT_SUCCESS';

export interface GetAdvertLoading {
  type: typeof GET_ADVERT_LOADING;
}

export interface GetAdvertFail {
  type: typeof GET_ADVERT_FAIL;
  payload: string;
}

export interface GetAdvertSuccess {
  type: typeof GET_ADVERT_SUCCESS;
  payload: IAdvert[];
}

// Create advert
export interface CreateGetAdvertLoading {
  type: typeof CREATE_ADVERT_LOADING;
}

export interface CreateGetAdvertFail {
  type: typeof CREATE_ADVERT_FAIL;
  payload: string;
}

export interface CreateGetAdvertSuccess {
  type: typeof CREATE_ADVERT_SUCCESS;
  payload: IAdvert;
}

export type AdvertDispatchTypes =
  | GetAdvertLoading
  | GetAdvertFail
  | GetAdvertSuccess
  | CreateGetAdvertFail
  | CreateGetAdvertLoading
  | CreateGetAdvertSuccess;
