import { Buildable, RoadBuildable } from '../../buildablesRegister';
import { Tile } from './Tile';

export type RoadPiece = 'ne' | 'se' | 'sw' | 'nw';

type RoadTileContent = {
  type: 'road';
  roadPieces: RoadPiece[];
  buildable: RoadBuildable;
};

export type BuildingTileContent = {
  type: 'building';
  buildabe: Buildable;
  population: number;
};

export type TileContent = BuildingTileContent | RoadTileContent | undefined;

export type EventHandler = {
  onPointerOver: () => void;
  onPointerOut: () => void;
  onPointerDown: (event: Phaser.Input.Pointer, x: number, y: number) => void;
};

export type EventHandlerCreator = (tile: Tile) => EventHandler;
