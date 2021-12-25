import { assetsRegister } from '../../../assetsRegister';
import { Buildable, RoadBuildable } from '../../../buildablesRegister';
import { globalState } from '../../../globalState';
import { EventHandlerCreator } from '../types';
import { ZIndices } from '../zIndices';
import { hasEnoughMoney, onBuildableBuilt } from './buildable.helpers';

const getBuildable = (): Buildable =>
  globalState.modeData?.buildable as Buildable;

export const createBuildEvents: EventHandlerCreator = (tile) => {
  const onPointerOver = () => {
    if (globalState.mode === 'build' && tile.content === undefined) {
      const notEnoughMoney = !hasEnoughMoney();

      tile.overlay = tile.scene.add.image(
        tile.x,
        tile.y,
        getBuildable().id || '',
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

      if (notEnoughMoney) {
        tile.overlay.setTint(0xf01010);
      }

      const tint = hasEnoughMoney() ? 0x10a010 : 0xf01010;
      tile.selection.setTint(tint);
    }
  };

  const onPointerOut = () => {
    if (globalState.mode === 'build' && tile.content === undefined) {
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
    if (
      globalState.mode === 'build' &&
      tile.content === undefined &&
      hasEnoughMoney()
    ) {
      tile.overlay?.destroy();
      tile.overlay = undefined;

      tile.tileContent = {
        type: 'building',
        buildabe: getBuildable(),
        population: 0,
      };

      tile.content = tile.scene.add.image(
        tile.x,
        tile.y,
        getBuildable().id || '',
        0
      );
      tile.content.setOrigin(0, 1);
      tile.content.setDepth(tile.zIndex + ZIndices.contentSprite);

      onBuildableBuilt();

      globalState.map.buildingTiles.push(tile);

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
