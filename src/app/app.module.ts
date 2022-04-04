import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WallComponent } from './wall/wall.component';
import { GameComponent } from './game/game.component';
import { SoftWallComponent } from './soft-wall/soft-wall.component';
import { BomberComponent } from './bomber/bomber.component';
import { MonsterComponent } from './monster/monster.component';

@NgModule({
  declarations: [
    AppComponent,
    WallComponent,
    GameComponent,
    SoftWallComponent,
    BomberComponent,
    MonsterComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
