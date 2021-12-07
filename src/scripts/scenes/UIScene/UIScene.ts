import { FpsText } from '../../objects/fpsText';
import { scenesRegister } from '../scenes';
import { createUI } from './ui/ui';

export default class UIScene extends Phaser.Scene {
  ui;
  fpsText;

  constructor() {
    super({ key: scenesRegister.UIScene });

    this.ui = createUI(this);
  }

  create() {
    this.ui.create();
    this.fpsText = new FpsText(this);
  }

  update() {
    this.fpsText.update();
  }
}
