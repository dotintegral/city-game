import { Buildable } from './buildablesRegister';

type GameMode = 'view' | 'build' | 'demolish';

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

export const setGlobalState = (props: SetStateProps) => {
  globalState.modeData = undefined;
  globalState.mode = props.mode;

  if (props.mode === 'build') {
    globalState.modeData = props.data;
  }

  console.log({ globalState });
};
