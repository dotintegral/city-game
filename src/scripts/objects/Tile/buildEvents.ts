import { assetsRegister } from '../../assetsRegister';
import { globalState } from '../../state';
import { Tile } from './Tile';
import { ZIndices } from './zIndices';

export const createBuildEvents = (tile: Tile) => {
  const onPointerOver = () => {
    if (globalState.mode === 'build' && tile.content === undefined) {
      tile.overlay = tile.scene.add.image(
        tile.x,
        tile.y,
        globalState.modeData?.buildable.sprite || ''
      );
      tile.overlay.setOrigin(0, 1);
      tile.overlay.setAlpha(0.5);
      tile.overlay.setDepth(tile.zIndex + ZIndices.overlaySprite);

      // tile.setTint(0x00ff00);
    }
  };

  const onPointerOut = () => {
    if (tile.overlay?.destroy) {
      tile.overlay.destroy();
      tile.overlay = undefined;
    }

    // tile.clearTint();
  };

  const onPointerDown = () => {
    if (globalState.mode === 'build' && tile.content === undefined) {
      tile.overlay?.destroy();
      tile.overlay = undefined;

      tile.content = tile.scene.add.image(
        tile.x,
        tile.y,
        globalState.modeData?.buildable.sprite || ''
      );
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

export type BuildEvents = ReturnType<typeof createBuildEvents>;
