import { createAction, props } from '@ngrx/store';
import { IGameArea } from './game.component';

export enum ActionTypes {
  setGameArea = 'SET_GAME_AREA',
}

export const setGameArea = createAction(
  ActionTypes.setGameArea,
  props<IGameArea>()
);
