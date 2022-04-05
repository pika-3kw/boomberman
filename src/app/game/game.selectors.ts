import { createSelector } from '@ngrx/store';
import { IGameState } from './game.reducer';

export const gameKey = 'game';

export interface IAppState {
  game: IGameState;
}

export const selectGame = (state: IAppState) => state.game;

export const selectGameArea = createSelector(
  selectGame,
  (state: IGameState) => state.area
);
