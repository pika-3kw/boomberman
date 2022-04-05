import { IPosition } from '../../interfaces/Position';
import { random } from '../../helpers/random';
import { IGameArea } from '../game/game.component';

export interface IMonsterPos extends IPosition {}
export interface IMonster {
  pos: IPosition;
}

export class Monster {
  static monsters: Monster[] = [];

  static generateMonsters(area: IGameArea, monsterCount: number) {
    for (let i = 0; i < monsterCount; i++) {
      this.monsters.push(
        new Monster({
          x: random(1, area.width - 2),
          y: random(1, area.height - 2, 'odd'),
        })
      );
    }

    return this.monsters;
  }

  constructor(public pos: IMonsterPos) {}
}
