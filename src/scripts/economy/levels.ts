import { Requirement } from '../buildablesRegister';
import { globalState } from '../globalState';
import { Tile } from '../objects/Tile/Tile';
import { BuildingTileContent } from '../objects/Tile/types';

const getEmptyRequirements = (): Record<number, boolean | undefined> => {
  return {
    0: true,
    1: undefined,
    2: undefined,
    3: undefined,
    4: undefined,
    5: undefined,
    6: undefined,
    7: undefined,
    8: undefined,
    9: undefined,
    10: undefined,
  };
};

const calculateNewLevel = (
  levelMap: Record<number, boolean | undefined>
): number => {
  const levels = Object.entries(levelMap).map(([level, value]) =>
    !!value ? parseInt(level) : 0
  );

  return Math.max(...levels);
};

const getNeighbouts = (tile: Tile, proximity: number): Tile[] => {
  const { row, column } = tile;

  const neighbours: Tile[] = [];

  const rowMin = Math.max(row - proximity, 0);
  const columnMin = Math.max(column - proximity, 0);
  const rowMax = Math.min(row + proximity, globalState.map.mapRows - 1);
  const columnMax = Math.min(
    column + proximity,
    globalState.map.mapColumns - 1
  );

  for (let r = rowMin; r <= rowMax; r++) {
    for (let c = columnMin; c <= columnMax; c++) {
      if (r !== row || c !== column) {
        const t = globalState.map.mapArray[r][c];
        if (t.tileContent !== undefined) {
          neighbours.push(t);
        }
      }
    }
  }

  return neighbours;
};

const checkRequirement = (requirement: Requirement, tile: Tile): boolean => {
  const { proximity, subTypes } = requirement;

  const neighbourTiles = getNeighbouts(tile, proximity);
  const neighboutBuildings = neighbourTiles
    .map((t) => t.tileContent)
    .filter(
      (tileContent) => tileContent?.type === 'building'
    ) as BuildingTileContent[];

  const subType = subTypes[0];

  return neighboutBuildings.some((nb) =>
    nb.buildabe.subTypes.includes(subType)
  );
};

const recalculateLevel = (tile: Tile) => {
  const tileContent = tile.tileContent as BuildingTileContent;
  const requirements = tileContent.buildabe.requirements;

  const requirementsMap = getEmptyRequirements();

  requirements.forEach((req) => {
    const level = req.level;
    const result = checkRequirement(req, tile);

    if (requirementsMap[level] === undefined) {
      requirementsMap[level] = result;
    } else {
      requirementsMap[level] = requirementsMap[level] && result;
    }
  });

  const newLevel = calculateNewLevel(requirementsMap);

  tileContent.level = newLevel;
  tile.checkState();
};

export const calculateLevelChanges = () => {
  const { buildingTiles } = globalState.map;

  buildingTiles.forEach(recalculateLevel);
};
