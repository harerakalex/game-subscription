import { Dispatch } from 'redux';

import { ApiAction } from '../../utils';
import { GAME_LOADING, GAME_FAIL, GAME_SUCCESS } from '../action-types/game';

export const GetGamesAction = () => {
  return (dispatchAction: Dispatch) =>
    dispatchAction(
      ApiAction({
        method: 'GET',
        url: `/games`,
        onStart: () => (dispatch: Dispatch) => {
          dispatch({ type: GAME_LOADING });
        },
        onSuccess: data => (dispatch: Dispatch) => {
          dispatch({
            type: GAME_SUCCESS,
            payload: Array.isArray(data) ? data[0].data : data.data
          });
        },
        onFailure: err => (dispatch: Dispatch) => {
          const error = Array.isArray(err) ? err[0] : err;
          const { response } = error;

          dispatch({
            type: GAME_FAIL,
            payload: response ? response.data.message || response.data.error : 'Please try again'
          });
        }
      })
    );
};
