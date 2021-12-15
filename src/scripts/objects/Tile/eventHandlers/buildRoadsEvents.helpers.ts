import { RoadPiece } from '../types';
import { ClickPosition } from './events.helper';

export const clickPositionToRoadPiece = ({
  verticalTriangle,
  horizontalTriangle,
}: ClickPosition): RoadPiece => {
  if (verticalTriangle === 'up') {
    if (horizontalTriangle === 'right') {
      return 'ne';
    } else {
      return 'nw';
    }
  } else {
    if (horizontalTriangle === 'right') {
      return 'se';
    } else {
      return 'sw';
    }
  }
};

export const roadPiecesToFrame = (roadPieces: RoadPiece[]): number => {
  const length = roadPieces.length;

  const matches = (pieces: RoadPiece[]) => {
    return (
      pieces.length === roadPieces.length &&
      pieces.every((piece) => roadPieces.includes(piece))
    );
  };

  if (length === 0) {
    return 0;
  }

  if (matches(['ne', 'sw'])) {
    return 1;
  }
  if (matches(['se', 'nw'])) {
    return 2;
  }

  if (matches(['ne'])) {
    return 4;
  }
  if (matches(['se'])) {
    return 5;
  }
  if (matches(['sw'])) {
    return 6;
  }
  if (matches(['nw'])) {
    return 7;
  }

  if (matches(['ne', 'nw'])) {
    return 8;
  }
  if (matches(['ne', 'se'])) {
    return 9;
  }
  if (matches(['se', 'sw'])) {
    return 10;
  }
  if (matches(['sw', 'nw'])) {
    return 11;
  }

  if (matches(['ne', 'se', 'nw'])) {
    return 12;
  }

  if (matches(['ne', 'se', 'sw'])) {
    return 13;
  }

  if (matches(['se', 'sw', 'nw'])) {
    return 14;
  }

  if (matches(['ne', 'sw', 'nw'])) {
    return 15;
  }

  return 3;
};
