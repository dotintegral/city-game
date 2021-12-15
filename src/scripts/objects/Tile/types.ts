import { Tile } from './Tile';

export type RoadPiece = 'ne' | 'se' | 'sw' | 'nw';

type RoadTileContent = {
  type: 'road';
  roadPieces: RoadPiece[];
};

export type TileContent = RoadTileContent | undefined;

export type EventHandler = {
  onPointerOver: () => void;
  onPointerOut: () => void;
  onPointerDown: (event: Phaser.Input.Pointer, x: number, y: number) => void;
};

export type EventHandlerCreator = (tile: Tile) => EventHandler;
