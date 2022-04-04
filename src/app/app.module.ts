import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WallComponent } from './wall/wall.component';
import { GameComponent } from './game/game.component';
import { SoftWallComponent } from './soft-wall/soft-wall.component';
import { BomberComponent } from './bomber/bomber.component';

@NgModule({
  declarations: [AppComponent, WallComponent, GameComponent, SoftWallComponent, BomberComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
