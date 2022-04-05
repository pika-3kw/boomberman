import { random } from '../../helpers/random';
import { IPosition } from 'src/interfaces/Position';
import { comparePostition } from 'src/helpers/position';
import { IGameArea } from '../game/game.component';
import { IWall } from '../wall/wall.model';

export interface IBomberPos extends IPosition {}

export class Bomber {
  static generateBomber(area: IGameArea, walls: IWall[]) {
    const pos = {
      x: random(1, area.width - 2, 'odd'),
      y: random(1, area.height - 2, 'odd'),
    };
    const isAroundPositionAvailable = this.checkPositionBomberAvaible(
      pos,
      walls
    );
    if (!isAroundPositionAvailable) {
      this.generateBomber(area, walls);
    }

    return new Bomber(pos);
  }

  static checkPositionBomberAvaible(pos: IPosition, walls: IWall[]): any {
    const unavailablePostions = [...walls];
    const isBomberPosAvailable = unavailablePostions.findIndex((item) =>
      comparePostition(item.pos, pos)
    );

    if (!isBomberPosAvailable) {
      return false;
    }

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
          comparePostition(p, item.pos)
        );
      })
      .filter((r) => r < 0).length;

    return checkAroundPostition >= 2;
  }

  constructor(public pos: IBomberPos) {}
}
