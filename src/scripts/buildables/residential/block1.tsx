import { NewBuildable } from '../../buildablesRegister';

export const Block1: NewBuildable = {
  name: 'Block 1',
  description: 'tbd',
  type: 'residential',
  subTypes: ['block'],
  sprite: {
    src: 'assets/buildings/block1.png',
    frameWidth: 64,
    frameHeight: 80,
  },
  details: {
    price: 150_000,
    capacity: 50,
    dayCosts: 300,
    monthlyRent: 500,
  },
};
