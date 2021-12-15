import { scenesRegister } from '../scenes';
import { Tile } from '../../objects/Tile/Tile';
import { createKeyBindings } from './keyBindings';
import { globalState } from '../../globalState';

const mapSize = 32;

export default class MainScene extends Phaser.Scene {
  keyBindings;
  ui;

  constructor() {
    super({ key: scenesRegister.MainScene });
  }

  create() {
    this.keyBindings = createKeyBindings(this);

    this.createTiles();

    this.keyBindings.bindKeys();
    this.cameras.main.setName('world');
  }

  createTiles() {
    const mapTopY = 100;
    const mapTopX = this.cameras.main.width / 2;

    for (let row = 0; row < mapSize; row++) {
      const rowTopX = mapTopX - row * 32;
      const rowTopY = mapTopY + row * 16;
      globalState.map.mapArray.push([]);

      for (let column = 0; column < mapSize; column++) {
        const x = rowTopX + 32 * column;
        const y = rowTopY + 16 * column;
        const zIndex = (row + column + 1) * 10;

        const tile = new Tile({ scene: this, x, y, zIndex, row, column });
        globalState.map.mapArray[row].push(tile);
      }
    }
  }

  update() {
    this.keyBindings.handleCameraMovement();
  }
}
