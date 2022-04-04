import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WallComponent } from './wall/wall.component';
import { GameComponent } from './game/game.component';
import { SoftWallComponent } from './soft-wall/soft-wall.component';

@NgModule({
  declarations: [AppComponent, WallComponent, GameComponent, SoftWallComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
