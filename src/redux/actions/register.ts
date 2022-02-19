import { Dispatch } from 'redux';

import { ApiAction } from '../../utils';
import { REGISTER_LOADING, REGISTER_FAIL, REGISTER_SUCCESS } from '../action-types/register';
import { IUser } from '../interfaces/user.interface';

export const RegisterAction = (userData: IUser) => {
  return (dispatchAction: Dispatch) =>
    dispatchAction(
      ApiAction({
        method: 'POST',
        url: '/users/signup',
        data: userData,
        onStart: () => (dispatch: Dispatch) => {
          dispatch({ type: REGISTER_LOADING });
        },
        onSuccess: data => (dispatch: Dispatch) => {
          dispatch({
            type: REGISTER_SUCCESS,
            payload: Array.isArray(data) ? data[0].data : data.data
          });
        },
        onFailure: err => (dispatch: Dispatch) => {
          const error = Array.isArray(err) ? err[0] : err;
          const { response } = error;

          dispatch({
            type: REGISTER_FAIL,
            payload: response ? response.data.message || response.data.error : 'Please try again'
          });
        }
      })
    );
};
