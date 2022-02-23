import { Dispatch } from 'redux';

import { ApiAction } from '../../utils';
import {
  GET_ADVERT_LOADING,
  GET_ADVERT_FAIL,
  GET_ADVERT_SUCCESS,
  CREATE_ADVERT_FAIL,
  CREATE_ADVERT_LOADING,
  CREATE_ADVERT_SUCCESS
} from '../action-types/advert';

export const GetAdvertsAction = () => {
  return (dispatchAction: Dispatch) =>
    dispatchAction(
      ApiAction({
        method: 'GET',
        url: `/adverts`,
        onStart: () => (dispatch: Dispatch) => {
          dispatch({ type: GET_ADVERT_LOADING });
        },
        onSuccess: data => (dispatch: Dispatch) => {
          dispatch({
            type: GET_ADVERT_SUCCESS,
            payload: Array.isArray(data) ? data[0].data : data.data
          });
        },
        onFailure: err => (dispatch: Dispatch) => {
          const error = Array.isArray(err) ? err[0] : err;
          const { response } = error;

          dispatch({
            type: GET_ADVERT_FAIL,
            payload: response ? response.data.message || response.data.error : 'Please try again'
          });
        }
      })
    );
};

// Create an advert
export const CreateAdvertAction = (gameId: number) => {
  return (dispatchAction: Dispatch) =>
    dispatchAction(
      ApiAction({
        method: 'POST',
        url: `/adverts`,
        data: { gameId },
        onStart: () => (dispatch: Dispatch) => {
          dispatch({ type: CREATE_ADVERT_LOADING });
        },
        onSuccess: data => (dispatch: Dispatch) => {
          dispatch({
            type: CREATE_ADVERT_SUCCESS,
            payload: Array.isArray(data) ? data[0].data : data.data
          });
        },
        onFailure: err => (dispatch: Dispatch) => {
          const error = Array.isArray(err) ? err[0] : err;
          const { response } = error;

          dispatch({
            type: CREATE_ADVERT_FAIL,
            payload: response ? response.data.message || response.data.error : 'Please try again'
          });
        }
      })
    );
};
