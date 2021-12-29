import { Buildable } from '../../buildablesRegister';

export const Shop1: Buildable = {
  id: 'shop-1',
  name: 'Grocery Shop',
  description: 'tbd',
  type: 'commercial',
  subTypes: ['grocery'],
  sprite: {
    src: 'assets/buildings/shop1.png',
    frameWidth: 64,
    frameHeight: 64,
  },
  details: {
    price: 40_000,
    capacity: 0,
    dayCosts: 50,
    monthlyRent: 1_000,
  },
  requirements: [],
};
