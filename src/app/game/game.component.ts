import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { setGameArea } from './game.actions';

import { IWall, Wall } from '../wall/wall.model';
import { BLOCK_SIZE } from '../../constants/game';

import { random } from '../../helpers/random';
import { IBomber } from '../bomber/bomber.component';
import { IMonster, Monster } from '../monster/monster.model';
import { IPosition } from 'src/interfaces/Position';

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
    // this.softWalls = Wall.generateSoftWalls(this.gameArea, this.softWallCount);
    this.monsters = Monster.generateMonsters(this.gameArea, this.monsterCount);
    this.generateBomber();
  }

  generateBomber() {
    const pos = {
      x: random(1, this.gameArea.width - 2, 'odd'),
      y: random(1, this.gameArea.height - 2, 'odd'),
    };
    const isAroundPositionAvailable = this.checkPositionBomber(pos);
    if (!isAroundPositionAvailable) {
      this.generateBomber();
    }
  }

  checkPositionBomber(pos: IPosition): any {
    const unavailablePostions = [...this.walls, ...this.softWalls];
    const isBomberPosAvailable = unavailablePostions.findIndex((item) =>
      this.comparePostition(item.pos, pos)
    );

    if (!isBomberPosAvailable) {
      return false;
    }

    this.bomber.pos = pos;

    const checkAroundPostition = [
      { x: pos.x - 1, y: pos.y - 1 },
      { x: pos.x - 1, y: pos.y },
      { x: pos.x - 1, y: pos.y + 1 },
      { x: pos.x, y: pos.y - 1 },
      { x: pos.x, y: pos.y + 1 },
      { x: pos.x + 1, y: pos.y - 1 },
      { x: pos.x + 1, y: pos.y },
      { x: pos.x + 1, y: pos.y + 1 },
    ]
      .map((p) => {
        return unavailablePostions.findIndex((item) =>
          this.comparePostition(p, item.pos)
        );
      })
      .filter((r) => r < 0).length;

    return checkAroundPostition >= 2;
  }

  comparePostition(pos1: IPosition, pos2: IPosition) {
    return pos1.x === pos2.x && pos1.y === pos2.y;
  }

  ngOnInit(): void {}

  getStylePos(pos: IPosition) {
    return {
      top: pos.y * BLOCK_SIZE + 'px',
      left: pos.x * BLOCK_SIZE + 'px',
    };
  }
}
