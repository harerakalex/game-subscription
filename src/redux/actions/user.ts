import { Dispatch } from 'redux';

import { ApiAction } from '../../utils';
import { PROFILE_LOADING, PROFILE_FAIL, PROFILE_SUCCESS } from '../action-types/user';

export const GetProfileAction = (username: string) => {
  return (dispatchAction: Dispatch) =>
    dispatchAction(
      ApiAction({
        method: 'GET',
        url: `/users/${username}`,
        onStart: () => (dispatch: Dispatch) => {
          dispatch({ type: PROFILE_LOADING });
        },
        onSuccess: data => (dispatch: Dispatch) => {
          dispatch({
            type: PROFILE_SUCCESS,
            payload: Array.isArray(data) ? data[0].data : data.data
          });
        },
        onFailure: err => (dispatch: Dispatch) => {
          const error = Array.isArray(err) ? err[0] : err;
          const { response } = error;

          dispatch({
            type: PROFILE_FAIL,
            payload: response ? response.data.message || response.data.error : 'Please try again'
          });
        }
      })
    );
};
