import { assetsRegister } from '../../../assetsRegister';
import { globalState } from '../../../globalState';
import { calculatePosition, ClickPosition } from './events.helper';
import { EventHandlerCreator, RoadPiece } from '../types';
import { ZIndices } from '../zIndices';
import {
  clickPositionToRoadPiece,
  roadPiecesToFrame,
} from './buildRoadsEvents.helpers';

export const createBuildRoadsEvents: EventHandlerCreator = (tile) => {
  const onPointerOver = () => {
    if (
      (globalState.mode === 'build-road' && tile.tileContent === undefined) ||
      tile.tileContent?.type === 'road'
    ) {
      tile.selection = tile.scene.add.image(
        tile.x,
        tile.y,
        assetsRegister.tiles.selection
      );
      tile.selection.setOrigin(0, 1);
      tile.selection.setDepth(tile.zIndex + ZIndices.overlayBorders);
      tile.selection.setTint(0x10a010);
    }
  };

  const onPointerOut = () => {
    if (globalState.mode === 'build-road') {
      if (tile.overlay?.destroy) {
        tile.overlay.destroy();
        tile.overlay = undefined;
      }

      if (tile.selection?.destroy) {
        tile.selection.destroy();
        tile.overlay = undefined;
      }
    }
  };

  const onPointerDown = (event: Phaser.Input.Pointer, x: number, y: number) => {
    if (globalState.mode === 'build-road') {
      const position = calculatePosition(x, y);
      const roadPiece = clickPositionToRoadPiece(position);

      if (tile.tileContent === undefined) {
        tile.tileContent = {
          type: 'road',
          roadPieces: [],
        };
      }

      if (tile.tileContent.type === 'road') {
        if (!tile.tileContent.roadPieces.includes(roadPiece)) {
          tile.tileContent.roadPieces.push(roadPiece);
        }
      }

      const frame = roadPiecesToFrame(tile.tileContent.roadPieces);

      if (tile.content === undefined) {
        tile.content = tile.scene.add.image(
          tile.x,
          tile.y,
          assetsRegister.roads.roads,
          frame
        );
      } else {
        tile.content.setFrame(frame);
      }

      tile.content.setOrigin(0, 1);
      tile.content.setDepth(tile.zIndex + ZIndices.contentSprite);
    }
  };

  return {
    onPointerOver,
    onPointerOut,
    onPointerDown,
  };
};
