import { Buildable } from './buildablesRegister';
import { Tile } from './objects/Tile/Tile';

type GameMode = 'view' | 'build' | 'build-road' | 'demolish';

type BuildData = {
  buildable: Buildable;
};

type Details = {
  money: number;
  date: Date;
  dayDuration: number;
};

type State = {
  mode: GameMode;
  modeData: BuildData | undefined;
  map: {
    mapArray: Tile[][];
  };
  details: Details;
};

export const globalState: State = {
  mode: 'view',
  modeData: undefined,
  map: {
    mapArray: [],
  },
  details: {
    money: 100000,
    date: new Date('01-01-2020'),
    dayDuration: 3,
  },
};

window['_globalState'] = globalState;

type SetStateProps =
  | {
      mode: 'view';
    }
  | {
      mode: 'build';
      data: BuildData;
    }
  | {
      mode: 'build-road';
    }
  | {
      mode: 'demolish';
    };

export const setGlobalMode = (props: SetStateProps) => {
  globalState.modeData = undefined;
  globalState.mode = props.mode;

  if (props.mode === 'build') {
    globalState.modeData = props.data;
  }

  console.log({ globalState });
};
