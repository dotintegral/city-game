import { Buildable } from './buildablesRegister';

type GameMode = 'view' | 'build';

type BuildData = {
  buildable: Buildable;
};

type State = {
  mode: GameMode;
  modeData: BuildData | undefined;
};

export const globalState: State = {
  mode: 'view',
  modeData: undefined,
};
