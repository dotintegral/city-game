import { globalState } from './globalState';
import { worldEvents } from './worldEvents';

const gameLoopStep = 100; // ms;

let lastDayChanged = 0;

const updateTimeFlow = (now: number) => {
  const diff = now - lastDayChanged; // ms
  const dayStepInMs = globalState.details.dayDuration * 1000;

  if (diff > dayStepInMs) {
    lastDayChanged = now;

    globalState.details.date.setDate(globalState.details.date.getDate() + 1);

    worldEvents.emit('dayChanged', globalState.details.date);
  }
};

const gameLoop = (now: number) => {
  updateTimeFlow(now);
};

export const initGameLoop = () => {
  const loop = () => {
    setTimeout(() => {
      loop();
      try {
        gameLoop(new Date().getTime());
      } catch (e) {
        console.error(e);
      }
    }, gameLoopStep);
  };

  loop();
};
