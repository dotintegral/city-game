import { globalState } from '../globalState';

export const calculateDailyCosts = () => {
  globalState.resources.money -= globalState.finances.dayCosts;
};
