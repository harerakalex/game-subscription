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
import {
  ProfileDispatchTypes,
  PROFILE_SUCCESS,
  PROFILE_LOADING,
  PROFILE_FAIL
} from '../action-types/user';
import { GameDispatchTypes, GAME_FAIL, GAME_LOADING, GAME_SUCCESS } from '../action-types/game';
import { LogoutDispatchTypes, LOGOUT_SUCCESS } from '../action-types/logout';
import { IUser } from '../interfaces/user.interface';
import { IGame } from '../interfaces/game.interface';

interface InitialState {
  user?: IUser;
  loginLoading?: boolean;
  errorLogin?: any;
  registerLoading?: boolean;
  errorRegister?: any;
  getProfileLoading: boolean;
  getProfileError?: any;
  games: IGame[];
  getGameLoading?: boolean;
  getGameError?: any;
}

const initialState: InitialState = {
  games: [],
  getProfileLoading: false
};

export const userReducer = (
  state = initialState,
  action:
    | LoginDispatchTypes
    | LogoutDispatchTypes
    | RegisterDispatchTypes
    | ProfileDispatchTypes
    | GameDispatchTypes
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
        loginLoading: false,
        games: []
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

    // Get User Profile
    case PROFILE_LOADING:
      return {
        ...state,
        getProfileLoading: true
      };
    case PROFILE_FAIL:
      return {
        ...state,
        getProfileError: action.payload,
        getProfileLoading: false
      };

    case PROFILE_SUCCESS:
      return {
        ...state,
        user: action.payload,
        getProfileLoading: false
      };

    // Get all games
    case GAME_LOADING:
      return {
        ...state,
        getGameLoading: true
      };
    case GAME_FAIL:
      return {
        ...state,
        getGameError: action.payload,
        getGameLoading: false
      };

    case GAME_SUCCESS:
      return {
        ...state,
        games: action.payload,
        getGameLoading: false
      };

    default:
      return state;
  }
};

export default userReducer;
