import { Tile } from '../Tile';

type VerticalTriangle = 'up' | 'down';
type HorizontalTriangle = 'left' | 'right';

const lines = {
  horizontalLine: 16,
  verticalLine: 32,
};

export const calculatePosition = (clickX: number, clickY: number) => {
  const verticalTriangle: VerticalTriangle =
    clickY < lines.horizontalLine ? 'up' : 'down';

  const horizontalTriangle: HorizontalTriangle =
    clickX < lines.verticalLine ? 'left' : 'right';

  return {
    verticalTriangle,
    horizontalTriangle,
  };
};

export type ClickPosition = ReturnType<typeof calculatePosition>;
