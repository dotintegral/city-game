import { Shop1 } from './buildables/commercial/shop1';
import { Block1 } from './buildables/residential/block1';
import { House1 } from './buildables/residential/house1';

type BuildableType = 'residential' | 'commercial' | 'industrial';

type BuildableSubType =
  | 'single'
  | 'duplex'
  | 'terraced'
  | 'block'
  | 'grocery'
  | 'supermarket'
  | 'shopping-mall';

type Sprite = {
  src: string;
  frameWidth: number;
  frameHeight: number;
};

type Details = {
  price: number;
  capacity: number;
  dayCosts: number;
  monthlyRent: number;
};

type Requirement = {
  level: number;
  proximity: number;
  subTypes: [BuildableSubType];
};

export type Buildable = {
  id: string;
  name: string;
  description: string;
  type: BuildableType;
  subTypes: [BuildableSubType];
  sprite: Sprite;
  details: Details;
  requirements: Requirement[];
};

export type RoadBuildable = {
  sprite: string;
  name: string;
  frame: number;
  details: Details;
};

const createRoadBuildable = (p: RoadBuildable): RoadBuildable => p;

const buildings = {
  house1: House1,
  block1: Block1,
  shop1: Shop1,
};

const roads = {
  road1: createRoadBuildable({
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
