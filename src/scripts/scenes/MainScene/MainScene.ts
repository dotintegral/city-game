import { scenesRegister } from '../scenes';
import { Tile } from '../../objects/Tile/Tile';
import { createKeyBindings } from './keyBindings';
import { globalConsts, globalState } from '../../globalState';

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

    for (let row = 0; row < globalState.map.mapRows; row++) {
      const rowTopX = mapTopX - (row * globalConsts.tileWidth) / 2;
      const rowTopY = mapTopY + (row * globalConsts.tileHeight) / 2;
      globalState.map.mapArray.push([]);

      for (let column = 0; column < globalState.map.mapColumns; column++) {
        const x = rowTopX + (globalConsts.tileWidth / 2) * column;
        const y = rowTopY + (globalConsts.tileHeight / 2) * column;
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
