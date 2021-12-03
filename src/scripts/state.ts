type GameMode = 'view' | 'build';

type State = {
  mode: GameMode;
};

export const globalState: State = {
  mode: 'view',
};
