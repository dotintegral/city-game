import { assetsRegister } from '../../../assetsRegister';
import { Buildable, RoadBuildable } from '../../../buildablesRegister';
import { BuildData, globalState } from '../../../globalState';
import { Rotation } from '../../../types';
import { worldEvents } from '../../../worldEvents';
import { EventHandlerCreator } from '../types';
import { ZIndices } from '../zIndices';
import { hasEnoughMoney, onBuildableBuilt } from './buildable.helpers';

const getBuildable = (): Buildable =>
  globalState.modeData?.buildable as Buildable;

const getModeData = (): BuildData => globalState.modeData as BuildData;

const rotationToFrame = (rot: Rotation): number => {
  return rot / 90;
};

export const createBuildEvents: EventHandlerCreator = (tile) => {
  const onRotation = () => {
    const newRotation = ((getModeData().rotation + 90) % 360) as Rotation;
    getModeData().rotation = newRotation;
    tile.overlay?.setFrame(rotationToFrame(newRotation));
  };

  const checkIfCanAfford = () => {
    const notEnoughMoney = !hasEnoughMoney();
    if (notEnoughMoney) {
      tile.overlay?.setTint(0xf01010);
    } else {
      tile.overlay?.clearTint();
    }
    const tint = hasEnoughMoney() ? 0x10a010 : 0xf01010;
    tile.selection?.setTint(tint);
  };

  const onPointerOver = () => {
    if (globalState.mode === 'build' && tile.content === undefined) {
      tile.overlay = tile.scene.add.image(
        tile.x,
        tile.y,
        getBuildable().id || '',
        rotationToFrame(getModeData().rotation)
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

      checkIfCanAfford();

      worldEvents.on('dayChanged', checkIfCanAfford);

      tile.scene.input.keyboard.on('keydown-R', onRotation);
    }
  };

  const onPointerOut = () => {
    tile.scene.input.keyboard.off('keydown-R', onRotation);
    worldEvents.off('dayChanged', checkIfCanAfford);

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
        rotationToFrame(getModeData().rotation)
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
