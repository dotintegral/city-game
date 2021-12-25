import { globalState } from '../globalState';
import { sumOverBuildings } from '../globalState.helpers';
import { chance, someoneMovesIn } from './consts';

const getCityCapacity = () =>
  sumOverBuildings((tile) => tile.buildabe.details.capacity);

const getCityPopulation = () => sumOverBuildings((tile) => tile.population);
const moveIn = () => {
  const vacancyTile = globalState.map.buildingTiles.find(
    (tile) =>
      tile.tileContent?.type === 'building' &&
      tile.tileContent.population < tile.tileContent.buildabe.details.capacity
  );

  if (vacancyTile?.tileContent?.type === 'building') {
    vacancyTile.tileContent.population += 1;
  }
};

export const calculatePopulationChanges = () => {
  const canMoveIn = getCityPopulation() < getCityCapacity();

  if (canMoveIn && chance(someoneMovesIn)) {
    moveIn();
  }

  globalState.resources.capacity = getCityCapacity();
  globalState.resources.population = getCityPopulation();
};
