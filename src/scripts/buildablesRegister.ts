import { assetsRegister } from './assetsRegister';

export type Buildable = {
  sprite: string;
  name: string;
  frame: number;
};

const createBuildable = (p: Buildable): Buildable => p;

const buildings = {
  house1: createBuildable({
    sprite: assetsRegister.buildings.house1,
    name: 'House 1',
    frame: 0,
  }),
  block1: createBuildable({
    sprite: assetsRegister.buildings.block1,
    name: 'Block 1',
    frame: 0,
  }),
};

const roads = {
  road0: createBuildable({
    sprite: 'roads',
    name: 'road 0',
    frame: 0,
  }),
  road1: createBuildable({
    sprite: 'roads',
    name: 'road 1',
    frame: 1,
  }),
  road2: createBuildable({
    sprite: 'roads',
    name: 'road 2',
    frame: 2,
  }),
  road3: createBuildable({
    sprite: 'roads',
    name: 'road 3',
    frame: 3,
  }),
  road4: createBuildable({
    sprite: 'roads',
    name: 'road 4',
    frame: 4,
  }),
  road5: createBuildable({
    sprite: 'roads',
    name: 'road 5',
    frame: 5,
  }),
  road6: createBuildable({
    sprite: 'roads',
    name: 'road 6',
    frame: 6,
  }),
  road7: createBuildable({
    sprite: 'roads',
    name: 'road 7',
    frame: 7,
  }),
  road8: createBuildable({
    sprite: 'roads',
    name: 'road 8',
    frame: 8,
  }),
  road9: createBuildable({
    sprite: 'roads',
    name: 'road 9',
    frame: 9,
  }),
  road10: createBuildable({
    sprite: 'roads',
    name: 'road 10',
    frame: 10,
  }),
};

export const buildablesRegister = {
  buildings,
  roads,
};
