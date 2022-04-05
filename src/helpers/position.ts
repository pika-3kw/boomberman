import { IPosition } from 'src/interfaces/Position';

export const comparePostition = (pos1: IPosition, pos2: IPosition) => {
  return pos1.x === pos2.x && pos1.y === pos2.y;
};
