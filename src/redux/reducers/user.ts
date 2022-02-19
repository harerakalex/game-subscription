import {
  LoginDispatchTypes,
  LOGIN_LOADING,
  LOGIN_FAIL,
  LOGIN_SUCCESS
} from '../action-types/login';
import { LogoutDispatchTypes, LOGOUT_SUCCESS } from '../action-types/logout';
import { IUser } from '../interfaces/user.interface';

interface InitialState {
  user?: IUser;
  loginLoading?: boolean;
  errorLogin?: any;
}

const initialState: InitialState = {};

export const userReducer = (
  state = initialState,
  action: LoginDispatchTypes | LogoutDispatchTypes
) => {
  switch (action.type) {
    case LOGIN_LOADING:
      return {
        ...state,
        loginLoading: true
      };
    case LOGIN_FAIL:
      return {
        ...state,
        errorLogin: action.payload,
        loginLoading: false
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loginLoading: false
      };

    // Reset state on logout
    case LOGOUT_SUCCESS:
      return {
        ...state,
        user: undefined,
        loginLoading: false
      };

    default:
      return state;
  }
};

export default userReducer;
