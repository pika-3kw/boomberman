import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { WallComponent } from './wall/wall.component';
import { GameComponent, IGame } from './game/game.component';
import { SoftWallComponent } from './soft-wall/soft-wall.component';
import { BomberComponent } from './bomber/bomber.component';
import { MonsterComponent } from './monster/monster.component';
import { GamedModule } from './game/game.module';

@NgModule({
  declarations: [
    AppComponent,
    WallComponent,
    GameComponent,
    SoftWallComponent,
    BomberComponent,
    MonsterComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    GamedModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
