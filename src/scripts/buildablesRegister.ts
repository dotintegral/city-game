import { assetsRegister } from './assetsRegister';

export type Buildable = {
  sprite: string;
  name: string;
};

const createBuildable = (p: Buildable): Buildable => p;

const buildings = {
  house1: createBuildable({
    sprite: assetsRegister.buildings.house1,
    name: 'House 1',
  }),
  block1: createBuildable({
    sprite: assetsRegister.buildings.block1,
    name: 'Block 1',
  }),
};

export const buildablesRegister = {
  buildings,
};
