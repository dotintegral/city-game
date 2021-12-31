import { assetsRegister } from '../../../assetsRegister';
import { globalConsts } from '../../../globalState';
import { Tile } from '../Tile';
import { ZIndices } from '../zIndices';

export const createLevelHandler = (tile: Tile) => {
  const delay = 30;
  let shouldShowIndicator = false;

  const onFrameUpdate = (val: number) => {
    if (shouldShowIndicator) {
      const offset =
        globalConsts.tileHeight * (0.5 + 0.2 * (1 - Math.cos(val)));

      tile.indicator?.setY(tile.y - offset);
      tile.scene.time.delayedCall(delay, onFrameUpdate, [val + 0.1]);
    }
  };

  const checkLevel = () => {
    if (tile.tileContent?.type === 'building') {
      if (tile.tileContent.level < 1) {
        if (!tile.indicator) {
          tile.indicator = tile.scene.add.image(
            tile.x + globalConsts.tileWidth / 2,
            tile.y - globalConsts.tileHeight / 2,
            assetsRegister.indicator
          );

          tile.indicator.setOrigin(0.5, 1);
          tile.indicator.setDepth(tile.zIndex + ZIndices.overlayIndicator);

          shouldShowIndicator = true;
          tile.scene.time.delayedCall(delay, onFrameUpdate, [0]);
        }
      } else {
        shouldShowIndicator = false;
        tile.indicator?.destroy();
        tile.indicator = undefined;
      }
    }
  };

  return {
    checkLevel,
  };
};
