import { globalState } from './globalState';
import { BuildingTileContent } from './objects/Tile/types';

export const sumOverBuildings = (
  func: (tileContent: BuildingTileContent) => number
): number =>
  globalState.map.buildingTiles.reduce((acc, tile) => {
    if (tile.tileContent?.type === 'building') {
      return acc + func(tile.tileContent);
    }

    return 0;
  }, 0);
