import { assetsRegister } from './assetsRegister';

type Details = {
  price: number;
  capacity: number;
  dayCosts: number;
  monthlyRent: number;
};

export type Buildable = {
  sprite: string;
  name: string;
  frame: number;
  details: Details;
};

const createBuildable = (p: Buildable): Buildable => p;

const buildings = {
  house1: createBuildable({
    sprite: assetsRegister.buildings.house1,
    name: 'House 1',
    frame: 0,
    details: {
      price: 20000,
      capacity: 5,
      dayCosts: 10,
      monthlyRent: 1000,
    },
  }),
  block1: createBuildable({
    sprite: assetsRegister.buildings.block1,
    name: 'Block 1',
    frame: 0,
    details: {
      price: 150000,
      capacity: 50,
      dayCosts: 200,
      monthlyRent: 1000,
    },
  }),
};

const roads = {
  road1: createBuildable({
    sprite: 'roads',
    name: 'Single road 1',
    frame: 0,
    details: {
      price: 1000,
      capacity: 0,
      dayCosts: 10,
      monthlyRent: 0,
    },
  }),
};

export const buildablesRegister = {
  buildings,
  roads,
};
