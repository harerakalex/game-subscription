import { Dispatch } from 'redux';

import { ApiAction } from '../../utils';
import { WITHDRAW_LOADING, WITHDRAW_FAIL, WITHDRAW_SUCCESS } from '../action-types/withdraw';

export const WithdrawAction = (amount: number, walletAddress: string) => {
  const payload = {
    amount: amount,
    walletAddress: walletAddress
  };
  return (dispatchAction: Dispatch) =>
    dispatchAction(
      ApiAction({
        method: 'POST',
        url: `/withdraw`,
        data: payload,
        onStart: () => (dispatch: Dispatch) => {
          dispatch({ type: WITHDRAW_LOADING });
        },
        onSuccess: data => (dispatch: Dispatch) => {
          dispatch({
            type: WITHDRAW_SUCCESS,
            payload: Array.isArray(data) ? data[0].data : data.data
          });
        },
        onFailure: err => (dispatch: Dispatch) => {
          const error = Array.isArray(err) ? err[0] : err;
          const { response } = error;

          dispatch({
            type: WITHDRAW_FAIL,
            payload: response ? response.data.message || response.data.error : 'Please try again'
          });
        }
      })
    );
};
