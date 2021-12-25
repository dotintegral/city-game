import { globalState } from './globalState';
import { worldEvents } from './worldEvents';

const gameLoopStep = 100; // ms;

let lastDayChanged = 0;

const updateTimeFlow = (now: number) => {
  const diff = now - lastDayChanged; // ms
  const dayStepInMs = globalState.details.dayDuration * 1000;

  if (diff > dayStepInMs) {
    lastDayChanged = now;
    const yesterdaysMonth = globalState.details.date.getMonth();

    globalState.details.date.setDate(globalState.details.date.getDate() + 1);

    worldEvents.emit('dayChanged', globalState.details.date);
    const todaysMonth = globalState.details.date.getMonth();

    if (yesterdaysMonth !== todaysMonth) {
      worldEvents.emit('monthChanged', globalState.details.date);
    }
  }
};

export const initTimeFlow = () => {
  const loop = () => {
    setTimeout(() => {
      loop();
      try {
        updateTimeFlow(new Date().getTime());
      } catch (e) {
        console.error(e);
      }
    }, gameLoopStep);
  };

  loop();
};
