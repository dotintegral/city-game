type WorldEventParams = {
  dayChanged: Date;
  monthChanged: Date;
  moneyBalanceChanged: number;
};

type WorldEventName = keyof WorldEventParams;

const createWorldEvents = () => {
  const emitter = new Phaser.Events.EventEmitter();

  const on = <T extends WorldEventName>(
    event: T,
    callback: (data: WorldEventParams[T]) => void
  ) => {
    emitter.on(event, callback);
  };

  const emit = <T extends WorldEventName>(
    event: T,
    data: WorldEventParams[T]
  ) => {
    emitter.emit(event, data);
  };

  const off = <T extends WorldEventName>(event: T, callback: () => void) => {
    emitter.off(event, callback);
  };

  return {
    on,
    off,
    emit,
  };
};

export const worldEvents = createWorldEvents();
