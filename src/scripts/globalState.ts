import { Buildable, RoadBuildable } from './buildablesRegister';
import { Tile } from './objects/Tile/Tile';

type GameMode = 'view' | 'build' | 'build-road' | 'demolish';

type BuildData = {
  buildable: Buildable;
};

type OldBuildData = {
  buildable: RoadBuildable;
};

type DayDetails = {
  date: Date;
  dayDuration: number;
};

type Resources = {
  money: number;
  population: number;
  capacity: number;
};

type Finances = {
  dayCosts: number;
  monthlyIncome: number;
};

type State = {
  mode: GameMode;
  modeData: BuildData | OldBuildData | undefined;
  map: {
    mapArray: Tile[][];
    buildingTiles: Tile[];
  };
  details: DayDetails;
  resources: Resources;
  finances: Finances;
};

export const globalState: State = {
  mode: 'view',
  modeData: undefined,
  map: {
    mapArray: [],
    buildingTiles: [],
  },
  details: {
    date: new Date('01-01-2020'),
    dayDuration: 0.2,
  },
  resources: {
    money: 100000,
    population: 0,
    capacity: 0,
  },
  finances: {
    dayCosts: 0,
    monthlyIncome: 0,
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
      data: OldBuildData;
    }
  | {
      mode: 'demolish';
    };

export const setGlobalMode = (props: SetStateProps) => {
  globalState.modeData = undefined;
  globalState.mode = props.mode;

  if (props.mode === 'build' || props.mode === 'build-road') {
    globalState.modeData = props.data;
  }

  console.log({ globalState });
};
