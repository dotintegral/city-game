import { createBottomBar } from './bottomBar/bottomBar';
import { createLeftBar } from './leftBar/leftBar';

export const createUI = (scene: Phaser.Scene) => {
  return {
    create: () => {
      createLeftBar(scene);
      createBottomBar(scene);
    },
  };
};
