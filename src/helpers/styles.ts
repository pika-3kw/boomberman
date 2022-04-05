import { BLOCK_SIZE } from '../constants/game';
import { IPosition } from 'src/interfaces/Position';

export const getStylePos = (pos: IPosition) => {
  return {
    top: pos.y * BLOCK_SIZE + 'px',
    left: pos.x * BLOCK_SIZE + 'px',
  };
};
