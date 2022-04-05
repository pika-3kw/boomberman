import { IPosition } from 'src/interfaces/Position';
import { IGameArea } from '../game/game.component';
import { random } from '../../helpers/random';

export interface IWallPos extends IPosition {}

export interface IWall {
  pos: IWallPos;
}

export type WallType = 'hard' | 'soft';

export class Wall implements IWall {
  static walls: Wall[] = [];
  static softWalls: Wall[] = [];

  static generateEdgelWalls(area: IGameArea) {
    for (let i = 0; i < area.width; i++) {
      this.walls.push(
        new Wall({ x: i, y: 0 }),
        new Wall({ x: i, y: area.height - 1 })
      );
    }

    for (let i = 1; i < area.height - 1; i++) {
      this.walls.push(
        new Wall({ x: 0, y: i }),
        new Wall({ x: area.width - 1, y: i })
      );
    }

    return this.walls;
  }

  static generateInnerWalls(area: IGameArea) {
    for (let i = 2; i < area.height - 1; i += 2) {
      for (let j = 2; j < area.width - 1; j += 2) {
        this.walls.push(new Wall({ x: j, y: i }));
      }
    }

    return this.walls;
  }

  static generateWall(area: IGameArea) {
    return [...Wall.generateEdgelWalls(area), ...Wall.generateInnerWalls(area)];
  }

  static generateSoftWalls(area: IGameArea, softWallCount: number) {
    for (let i = 0; i < softWallCount; i++) {
      this.softWalls.push(
        new Wall(
          {
            x: random(1, area.width - 2),
            y: random(1, area.height - 2, 'odd'),
          },
          'soft'
        )
      );
    }
    return this.softWalls;
  }

  constructor(public pos: IWallPos, public type: WallType = 'hard') {}
}
