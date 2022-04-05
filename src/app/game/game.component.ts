import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { setGameArea } from './game.actions';

import { IWall, Wall } from '../wall/wall.model';

import { IBomber } from '../bomber/bomber.component';
import { Monster } from '../monster/monster.model';
import { Bomber } from '../bomber/bomber.model';

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
  bomber: IBomber = {
    pos: {
      x: 0,
      y: 0,
    },
  };
  monsterCount: number = 10;
  monsters: Monster[] = [];

  constructor(private store: Store<{ game: IGame }>) {
    this.game$ = store.pipe(select('game'));
    this.gameArea = { width: 21, height: 15 };
    this.store.dispatch(setGameArea(this.gameArea));

    this.walls = Wall.generateWall(this.gameArea);
    this.walls.push(
      ...Wall.generateSoftWalls(this.gameArea, this.softWallCount)
    );

    this.monsters = Monster.generateMonsters(this.gameArea, this.monsterCount);
    this.bomber = Bomber.generateBomber(this.gameArea, this.walls);
  }

  ngOnInit(): void {}
}
