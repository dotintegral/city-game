import { assetsRegister } from '../../assetsRegister';
import { globalState } from '../../globalState';
import { Tile } from './Tile';
import { ZIndices } from './zIndices';

export const createDemolishEvents = (tile: Tile) => {
  const onPointerOver = () => {
    if (globalState.mode === 'demolish' && tile.content === undefined) {
      // tile.overlay = tile.scene.add.image(
      //   tile.x,
      //   tile.y,
      //   globalState.modeData?.buildable.sprite || ''
      // );
      // tile.overlay.setOrigin(0, 1);
      // tile.overlay.setAlpha(0.5);
      // tile.overlay.setDepth(tile.zIndex + ZIndices.overlaySprite);

      tile.selection = tile.scene.add.image(
        tile.x,
        tile.y,
        assetsRegister.tiles.selection
      );
      tile.selection.setOrigin(0, 1);
      tile.selection.setDepth(tile.zIndex + ZIndices.overlayBorders);
      tile.selection.setTint(0xa01010);
    }
  };

  const onPointerOut = () => {
    if (tile.overlay?.destroy) {
      tile.overlay.destroy();
      tile.overlay = undefined;
    }

    if (tile.selection?.destroy) {
      tile.selection.destroy();
      tile.overlay = undefined;
    }
  };

  const onPointerDown = () => {
    if (globalState.mode === 'demolish' && tile.content === undefined) {
      // tile.overlay?.destroy();
      // tile.overlay = undefined;
      // tile.content = tile.scene.add.image(
      //   tile.x,
      //   tile.y,
      //   globalState.modeData?.buildable.sprite || ''
      // );
      // tile.content.setOrigin(0, 1);
      // tile.content.setDepth(tile.zIndex + ZIndices.contentSprite);
    }
  };

  return {
    onPointerOver,
    onPointerOut,
    onPointerDown,
  };
};

export type DemolishEvents = ReturnType<typeof createDemolishEvents>;
