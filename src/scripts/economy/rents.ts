import { globalState } from '../globalState';
import { sumOverBuildings } from '../globalState.helpers';
import { BuildingTileContent } from '../objects/Tile/types';

const levelToModifier = {
  0: 0,
  1: 1,
  2: 1.2,
  3: 1.4,
  4: 1.6,
  5: 1.8,
};

const calculateMonthlyRent = (tile: BuildingTileContent) => {
  const {
    level,
    buildabe: {
      details: { monthlyRent },
    },
  } = tile;

  const modifier = levelToModifier[level] || 0;
  return modifier * monthlyRent;
};

export const calculateIncomeFromRent = () => {
  const income = sumOverBuildings(
    (tile) => tile.population * calculateMonthlyRent(tile)
  );

  globalState.resources.money += income;
};
