import { scenesRegister } from '../scenes';
import { createUI } from './ui/ui';

export default class UIScene extends Phaser.Scene {
  ui;

  constructor() {
    super({ key: scenesRegister.UIScene });

    this.ui = createUI(this);
  }

  create() {
    this.ui.create();
  }

  update() {}
}
