import { Buildable } from './buildablesRegister';
import { Tile } from './objects/Tile/Tile';

type GameMode = 'view' | 'build' | 'demolish';

type BuildData = {
  buildable: Buildable;
};

type State = {
  mode: GameMode;
  modeData: BuildData | undefined;
  map: {
    mapArray: Tile[][];
  };
};

export const globalState: State = {
  mode: 'view',
  modeData: undefined,
  map: {
    mapArray: [],
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
