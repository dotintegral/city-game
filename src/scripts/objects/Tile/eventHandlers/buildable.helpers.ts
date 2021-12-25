import { RoadBuildable } from '../../../buildablesRegister';
import { globalState } from '../../../globalState';

export const onBuildableBuilt = () => {
  const price = globalState.modeData?.buildable.details.price || 0;
  globalState.resources.money -= price;

  globalState.resources.capacity +=
    globalState.modeData?.buildable.details.capacity || 0;
  globalState.finances.dayCosts +=
    globalState.modeData?.buildable.details.dayCosts || 0;
};

export const hasEnoughMoney = () =>
  globalState.resources.money >
  (globalState.modeData?.buildable.details.price || 0);
