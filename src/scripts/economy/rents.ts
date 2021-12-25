import { globalState } from '../globalState';
import { sumOverBuildings } from '../globalState.helpers';

export const calculateIncomeFromRent = () => {
  const income = sumOverBuildings(
    (tile) => tile.population * tile.buildabe.details.monthlyRent
  );

  globalState.resources.money += income;
};
