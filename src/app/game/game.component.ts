import { Component, OnInit } from '@angular/core';

import { IWall } from '../wall/wall.component';
import { BLOCK_SIZE } from '../../constants/game';

import { random } from '../../helpers/random';
import { IBomber } from '../bomber/bomber.component';

interface IPosition {
  x: number;
  y: number;
}

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  height: number = 15;
  width: number = 21;
  walls: IWall[] = [];
  softWallCount: number = 80;
  softWalls: IWall[] = [];
  bomber: IBomber = {
    pos: {
      x: 0,
      y: 0,
    },
  };

  constructor() {
    this.generateEdgelWalls();
    this.generateInnerWalls();
    this.generateSoftWalls();
    this.generateBomber();
  }

  generateEdgelWalls() {
    for (let i = 0; i < this.width; i++) {
      this.walls.push(
        ...[
          {
            pos: {
              x: i,
              y: 0,
            },
          },
          {
            pos: {
              x: i,
              y: this.height - 1,
            },
          },
        ]
      );
    }

    for (let i = 1; i < this.height - 1; i++) {
      this.walls.push(
        ...[
          {
            pos: {
              x: 0,
              y: i,
            },
          },
          {
            pos: {
              x: this.width - 1,
              y: i,
            },
          },
        ]
      );
    }
  }

  generateInnerWalls() {
    for (let i = 2; i < this.height - 1; i += 2) {
      for (let j = 2; j < this.width - 1; j += 2) {
        this.walls.push({
          pos: {
            x: j,
            y: i,
          },
        });
      }
    }
  }

  generateSoftWalls() {
    for (let i = 0; i < this.softWallCount; i++) {
      this.softWalls.push({
        pos: {
          x: random(1, this.width - 2),
          y: random(1, this.height - 2, 'odd'),
        },
      });
    }
  }

  generateBomber() {
    let count = 0;
    const pos = {
      x: random(1, this.width - 2, 'odd'),
      y: random(1, this.height - 2, 'odd'),
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
