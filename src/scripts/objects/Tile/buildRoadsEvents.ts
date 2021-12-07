import { assetsRegister } from '../../assetsRegister';
import { globalState } from '../../globalState';
import { Tile } from './Tile';
import { ZIndices } from './zIndices';

const getTile = (row: number, column: number) => {
  return globalState.map.mapArray[row][column];
};

export const createBuildRoadsEvents = (tile: Tile) => {
  const onPointerOver = () => {
    if (globalState.mode === 'build-road' && tile.content === undefined) {
      tile.overlay = tile.scene.add.image(
        tile.x,
        tile.y,
        assetsRegister.roads.roads,
        0
      );
      tile.overlay.setOrigin(0, 1);
      tile.overlay.setAlpha(0.5);
      tile.overlay.setDepth(tile.zIndex + ZIndices.overlaySprite);

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
    if (globalState.mode === 'build-road' && tile.content === undefined) {
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

  const onPointerDown = () => {
    const { row, column } = tile;
    if (globalState.mode === 'build-road' && tile.content === undefined) {
      let frame = 0;
      tile.overlay?.destroy();
      tile.overlay = undefined;

      const seTile = getTile(row, column + 1);

      if (seTile.roadFrame !== undefined) {
        if (seTile.roadFrame === 0) {
          seTile.roadFrame = 7;
          seTile.content?.setFrame(7);
        }
        if (seTile.roadFrame === 5) {
          seTile.roadFrame = 2;
          seTile.content?.setFrame(2);
        }
        frame = 5;
      }

      tile.content = tile.scene.add.image(
        tile.x,
        tile.y,
        assetsRegister.roads.roads,
        frame
      );
      tile.roadFrame = frame;
      tile.content.setOrigin(0, 1);
      tile.content.setDepth(tile.zIndex + ZIndices.contentSprite);

      if (tile.selection?.destroy) {
        tile.selection.destroy();
        tile.overlay = undefined;
      }
    }
  };

  return {
    onPointerOver,
    onPointerOut,
    onPointerDown,
  };
};

export type BuildRoadsEvents = ReturnType<typeof createBuildRoadsEvents>;
