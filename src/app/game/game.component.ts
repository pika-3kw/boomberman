import { Component, OnInit, HostListener } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { setGameArea } from './game.actions';

import { IWall, Wall } from '../wall/wall.model';

import { IBomber } from '../bomber/bomber.component';
import { Monster } from '../monster/monster.model';
import { Bomber, BomberControl } from '../bomber/bomber.model';
import { Map } from '../map/map.model';

export interface IGameArea {
  width: number;
  height: number;
}

export interface IGame {
  area: IGameArea;
}

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  game$: Observable<IGame>;

  gameArea: IGameArea = { width: 0, height: 0 };

  walls: Wall[] = [];
  softWallCount: number = 80;
  softWalls: IWall[] = [];
  bomber: Bomber;
  monsterCount: number = 10;
  monsters: Monster[] = [];
  map: Map;

  keysControl = ['w', 'a', 's', 'd'];

  @HostListener('document:keypress', ['$event'])
  onKeyboardPress(e: KeyboardEvent) {
    const { key } = e;

    switch (key.toLowerCase()) {
      case 'w':
        this.bomber.run(BomberControl.UP);
        return;
      case 's':
        this.bomber.run(BomberControl.DOWN);
        return;
      case 'a':
        this.bomber.run(BomberControl.LEFT);
        return;
      case 'd':
        this.bomber.run(BomberControl.RIGHT);
        return;
      default:
        return;
    }
  }

  constructor(private store: Store<{ game: IGame }>) {
    this.game$ = store.pipe(select('game'));
    this.gameArea = { width: 21, height: 15 };
    this.store.dispatch(setGameArea(this.gameArea));

    this.walls = Wall.generateWall(this.gameArea);
    this.walls.push(
      ...Wall.generateSoftWalls(this.gameArea, this.softWallCount)
    );

    this.monsters = Monster.generateMonsters(this.gameArea, this.monsterCount);
    this.map = new Map(this.walls);
    this.bomber = Bomber.generateBomber(this.gameArea, this.map);
  }

  ngOnInit(): void {}
}
