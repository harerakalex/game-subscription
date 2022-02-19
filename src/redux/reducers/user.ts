import {
  LoginDispatchTypes,
  LOGIN_LOADING,
  LOGIN_FAIL,
  LOGIN_SUCCESS
} from '../action-types/login';
import {
  RegisterDispatchTypes,
  REGISTER_SUCCESS,
  REGISTER_LOADING,
  REGISTER_FAIL
} from '../action-types/register';
import { LogoutDispatchTypes, LOGOUT_SUCCESS } from '../action-types/logout';
import { IUser } from '../interfaces/user.interface';

interface InitialState {
  user?: IUser;
  loginLoading?: boolean;
  errorLogin?: any;
  registerLoading?: boolean;
  errorRegister?: any;
}

const initialState: InitialState = {};

export const userReducer = (
  state = initialState,
  action: LoginDispatchTypes | LogoutDispatchTypes | RegisterDispatchTypes
) => {
  switch (action.type) {
    // Login
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

    // Register
    case REGISTER_LOADING:
      return {
        ...state,
        registerLoading: true
      };
    case REGISTER_FAIL:
      return {
        ...state,
        errorRegister: action.payload,
        registerLoading: false
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        registerLoading: false
      };

    default:
      return state;
  }
};

export default userReducer;
