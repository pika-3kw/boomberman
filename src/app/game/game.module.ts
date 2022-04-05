import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { gameReducer } from './game.reducer';
import { gameKey } from './game.selectors';

@NgModule({
  imports: [StoreModule.forFeature(gameKey, gameReducer)],
})
export class GamedModule {}
