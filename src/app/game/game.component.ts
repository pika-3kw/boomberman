import { Component, OnInit } from '@angular/core';

import { IWall, IWallPos } from '../wall/wall.component';
import { BLOCK_SIZE } from '../../constants/game';

import { random } from '../../helpers/random';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  height: number = 15;
  width: number = 21;
  walls: IWall[] = [];
  softWallCount: number = 50;
  softWalls: IWall[] = [];

  constructor() {
    this.generateEdgelWalls();
    this.generateInnerWalls();
    this.generateSoftWalls();
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
          x: random(1, this.width - 1, 'odd'),
          y: random(1, this.height - 1, 'odd'),
        },
      });
    }
  }

  ngOnInit(): void {}

  getStylePos(pos: IWallPos) {
    return {
      top: pos.y * BLOCK_SIZE + 'px',
      left: pos.x * BLOCK_SIZE + 'px',
    };
  }
}
