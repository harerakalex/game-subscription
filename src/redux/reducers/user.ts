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
import {
  AdvertDispatchTypes,
  GET_ADVERT_FAIL,
  GET_ADVERT_SUCCESS,
  GET_ADVERT_LOADING,
  CREATE_ADVERT_FAIL,
  CREATE_ADVERT_LOADING,
  CREATE_ADVERT_SUCCESS
} from '../action-types/advert';

import {
  WithdrawDispatchTypes,
  WITHDRAW_FAIL,
  WITHDRAW_LOADING,
  WITHDRAW_SUCCESS
} from '../action-types/withdraw';
import { GameDispatchTypes, GAME_FAIL, GAME_LOADING, GAME_SUCCESS } from '../action-types/game';
import { LogoutDispatchTypes, LOGOUT_SUCCESS } from '../action-types/logout';
import { IUser } from '../interfaces/user.interface';
import { IGame } from '../interfaces/game.interface';
import { IAdvert } from '../interfaces/advert.interface';
import { getGameIncome } from '../../utils';
import { IWithdraw } from '../interfaces/withdraw.interface';

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
  adverts: IAdvert[];
  getAdvertsLoading: boolean;
  getAdvertError?: any;
  createAdvertLoading: boolean;
  createAdvertError?: any;
  withdraw?: IWithdraw;
  withdrawError?: any;
  withdrawLoading: boolean;
}

const initialState: InitialState = {
  games: [],
  adverts: [],
  getProfileLoading: false,
  getAdvertsLoading: false,
  createAdvertLoading: false,
  withdrawLoading: false
};

export const userReducer = (
  state = initialState,
  action:
    | LoginDispatchTypes
    | LogoutDispatchTypes
    | RegisterDispatchTypes
    | ProfileDispatchTypes
    | GameDispatchTypes
    | AdvertDispatchTypes
    | WithdrawDispatchTypes
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
        games: [],
        adverts: [],
        errorLogin: '',
        errorRegister: '',
        withdraw: undefined
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

    // Get Advert
    case GET_ADVERT_LOADING:
      return {
        ...state,
        getAdvertsLoading: true
      };
    case GET_ADVERT_FAIL:
      return {
        ...state,
        getAdvertError: action.payload,
        getAdvertsLoading: false
      };

    case GET_ADVERT_SUCCESS:
      return {
        ...state,
        adverts: action.payload,
        getAdvertsLoading: false
      };

    // CREATE ADVERT
    case CREATE_ADVERT_LOADING:
      return {
        ...state,
        createAdvertLoading: true
      };
    case CREATE_ADVERT_FAIL:
      return {
        ...state,
        createAdvertError: action.payload,
        createAdvertLoading: false
      };

    case CREATE_ADVERT_SUCCESS:
      const { balance, subscription } = state.user as IUser;
      const income = getGameIncome(subscription as number);
      const newBalance = (balance as number) + income;
      const newUser = state.user;
      if (newUser) newUser.balance = newBalance;

      return {
        ...state,
        adverts: [...state.adverts, action.payload],
        user: newUser,
        createAdvertLoading: false
      };

    // Withdraw
    case WITHDRAW_LOADING:
      return {
        ...state,
        withdrawLoading: true
      };
    case WITHDRAW_FAIL:
      return {
        ...state,
        withdrawError: action.payload,
        withdrawLoading: false
      };

    case WITHDRAW_SUCCESS:
      if (state.user) {
        const reducedBalance = (state.user?.balance as number) - action.payload.amount;
        const userAfterWithdraw = state.user;
        userAfterWithdraw.balance = reducedBalance;
      }
      return {
        ...state,
        withdraw: action.payload,
        user: newUser,
        withdrawLoading: false
      };

    default:
      return state;
  }
};

export default userReducer;
