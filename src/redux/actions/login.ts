import { Dispatch } from 'redux';

import { ApiAction } from '../../utils';
import { Login, LOGIN_LOADING, LOGIN_FAIL, LOGIN_SUCCESS } from '../action-types/login';

export const LoginAction = (userData: Login) => {
  return (dispatchAction: Dispatch) =>
    dispatchAction(
      ApiAction({
        method: 'POST',
        url: '/users/login',
        data: userData,
        onStart: () => (dispatch: Dispatch) => {
          dispatch({ type: LOGIN_LOADING });
        },
        onSuccess: data => (dispatch: Dispatch) => {
          dispatch({
            type: LOGIN_SUCCESS,
            payload: Array.isArray(data) ? data[0].data : data.data
          });
        },
        onFailure: err => (dispatch: Dispatch) => {
          const error = Array.isArray(err) ? err[0] : err;
          const { response } = error;

          dispatch({
            type: LOGIN_FAIL,
            payload: response ? response.data.message || response.data.error : 'Please try again'
          });
        }
      })
    );
};
