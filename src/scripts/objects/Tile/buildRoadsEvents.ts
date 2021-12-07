import { assetsRegister } from '../../assetsRegister';
import { globalState } from '../../globalState';
import { Tile } from './Tile';
import { ZIndices } from './zIndices';

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
    if (globalState.mode === 'build-road' && tile.content === undefined) {
      tile.overlay?.destroy();
      tile.overlay = undefined;

      tile.content = tile.scene.add.image(
        tile.x,
        tile.y,
        assetsRegister.roads.roads,
        0
      );
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
