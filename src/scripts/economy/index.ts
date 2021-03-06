import { worldEvents } from '../worldEvents';
import { calculateDailyCosts } from './costs';
import { calculateLevelChanges } from './levels';
import { calculatePopulationChanges } from './population';
import { calculateIncomeFromRent } from './rents';

const onDayChange = () => {
  calculateDailyCosts();
  calculatePopulationChanges();
};

const onMonthChange = () => {
  calculateLevelChanges();
  calculateIncomeFromRent();
};

export const initiateEconomy = () => {
  worldEvents.on('dayChanged', onDayChange);
  worldEvents.on('monthChanged', onMonthChange);
};
