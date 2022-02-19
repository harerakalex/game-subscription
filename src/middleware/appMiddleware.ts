import { Method } from 'axios';
import { API_REQUEST } from '../constants/apiActions';
import { Axios } from '../utils';

interface HttpOptions {
  token: string;
  baseURL: string;
  headers: object;
}

type APIActionPayload = {
  onStart: any;
  onSuccess: any;
  onFailure: any;
  onEnd: any;
  method: Method;
  data: object;
  queries: [string];
  url: string;
  httpOptions: HttpOptions;
};
type Action = {
  type: string;
  payload: APIActionPayload;
};

function apiMiddleware({ dispatch, getState }: any) {
  return (next: Function) =>
    async ({ type = '', payload }: Action) => {
      if (type !== API_REQUEST) {
        return next({ type, payload });
      }
      try {
        if (typeof payload.onStart === 'function') {
          await payload.onStart()(dispatch);
        }
        const { data } = await Axios.request({
          method: payload.method,
          url: payload.url,
          data: payload.data,
          params: payload.queries
        });

        if (typeof payload.onSuccess === 'function') {
          await payload.onSuccess(data)(dispatch);
        }
      } catch (error) {
        if (typeof payload.onFailure === 'function') {
          await payload.onFailure(error)(dispatch);
        }
      }
      if (typeof payload.onEnd === 'function') {
        await payload.onEnd()(dispatch);
      }
      return getState();
    };
}

export default apiMiddleware;
