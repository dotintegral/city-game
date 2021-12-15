import { assetsRegister } from '../../../assetsRegister';
import { globalState } from '../../../globalState';
import { EventHandlerCreator } from '../types';
import { ZIndices } from '../zIndices';

export const createDemolishEvents: EventHandlerCreator = (tile) => {
  const onPointerOver = () => {
    if (globalState.mode === 'demolish') {
      tile.selection = tile.scene.add.image(
        tile.x,
        tile.y,
        assetsRegister.tiles.selection
      );
      tile.selection.setOrigin(0, 1);
      tile.selection.setDepth(tile.zIndex + ZIndices.overlayBorders);
      tile.selection.setTint(0xf01010);

      if (tile.content !== undefined) {
        tile.content.setTint(0xf01010);
        tile.content.setAlpha(0.5);
      }
    }
  };

  const onPointerOut = () => {
    if (globalState.mode === 'demolish') {
      if (tile.overlay?.destroy) {
        tile.overlay.destroy();
        tile.overlay = undefined;
      }

      if (tile.selection?.destroy) {
        tile.selection.destroy();
        tile.overlay = undefined;
      }

      if (tile.content?.clearTint) {
        tile.content.clearTint();
        tile.content.clearAlpha();
      }
    }
  };

  const onPointerDown = () => {
    if (globalState.mode === 'demolish' && tile.content !== undefined) {
      tile.content?.destroy();
      tile.content = undefined;
    }
  };

  return {
    onPointerOver,
    onPointerOut,
    onPointerDown,
  };
};
