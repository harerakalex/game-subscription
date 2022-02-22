import { IGame } from '../interfaces/game.interface';

export const GAME_LOADING = 'GAME_LOADING';
export const GAME_FAIL = 'GAME_FAIL';
export const GAME_SUCCESS = 'GAME_SUCCESS';

export interface GameLoading {
  type: typeof GAME_LOADING;
}

export interface GameFail {
  type: typeof GAME_FAIL;
  payload: string;
}

export interface GameSuccess {
  type: typeof GAME_SUCCESS;
  payload: IGame[];
}

export type GameDispatchTypes = GameLoading | GameFail | GameSuccess;
