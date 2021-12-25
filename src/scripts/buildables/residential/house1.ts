import { Buildable } from '../../buildablesRegister';

export const House1: Buildable = {
  id: 'house-1',
  name: 'House 1',
  description: 'tbd',
  type: 'residential',
  subTypes: ['single'],
  sprite: {
    src: 'assets/buildings/house1.png',
    frameWidth: 64,
    frameHeight: 64,
  },
  details: {
    price: 20_000,
    capacity: 5,
    dayCosts: 10,
    monthlyRent: 1_000,
  },
};
