import { random } from '../../helpers/random';
import { IPosition } from 'src/interfaces/Position';
import { comparePostition } from 'src/helpers/position';
import { IGameArea } from '../game/game.component';
import { IWall } from '../wall/wall.model';
import { Map } from '../map/map.model';

export interface IBomberPos extends IPosition {}

export enum BomberControl {
  UP = 'UP',
  DOWN = 'DOWN',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

export class Bomber {
  static generateBomber(area: IGameArea, map: Map) {
    const pos = {
      x: random(1, area.width - 2, 'odd'),
      y: random(1, area.height - 2, 'odd'),
    };
    const isAroundPositionAvailable = this.checkPositionBomberAvaible(
      pos,
      map.walls
    );
    if (!isAroundPositionAvailable) {
      this.generateBomber(area, map);
    }

    return new Bomber(pos, map);
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

  speed: number = 1;
  speedRatio: number = 1;

  constructor(public pos: IBomberPos, public map: Map) {}

  public run(control: BomberControl) {
    switch (control) {
      case BomberControl.UP:
        this.goAhead();
        return;

      case BomberControl.DOWN:
        this.goBack();
        return;

      case BomberControl.LEFT:
        this.turnLeft();
        return;

      case BomberControl.RIGHT:
        this.turnRight();
        return;

      default:
        return;
    }
  }

  private goAhead() {
    const newPos = { ...this.pos, y: this.pos.y - this.calculateSpeed() };
    const isAllow = this.checkRun(newPos);
    if (isAllow) {
      this.pos = newPos;
    }
  }

  private goBack() {
    const newPos = { ...this.pos, y: this.pos.y + this.calculateSpeed() };
    const isAllow = this.checkRun(newPos);
    if (isAllow) {
      this.pos = newPos;
    }
  }

  private turnLeft() {
    const newPos = { ...this.pos, x: this.pos.x - this.calculateSpeed() };
    const isAllow = this.checkRun(newPos);
    if (isAllow) {
      this.pos = newPos;
    }
  }

  private turnRight() {
    const newPos = { ...this.pos, x: this.pos.x + this.calculateSpeed() };
    const isAllow = this.checkRun(newPos);
    if (isAllow) {
      this.pos = newPos;
    }
  }

  private calculateSpeed() {
    return this.speed * this.speedRatio;
  }

  private checkRun(pos: IBomberPos): boolean {
    const wallIndex: number = this.map.walls.findIndex(
      (wall) => wall.pos.x === pos.x && wall.pos.y === pos.y
    );

    return wallIndex === -1;
  }
}
