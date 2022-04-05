import { Action, createReducer, on } from '@ngrx/store';

import { setGameArea } from './game.actions';

export interface IGameState {
  area: {
    width: number;
    height: number;
  };
}
export const initState: IGameState = {
  area: {
    width: 0,
    height: 0,
  },
};

const _gameReducer = createReducer(
  initState,
  on(setGameArea, (state, gameArea) => ({
    ...state,
    area: {
      width: gameArea.width,
      height: gameArea.height,
    },
  }))
);

export function gameReducer(state: IGameState | undefined, action: Action) {
  return _gameReducer(state, action);
}
