import { scenesRegister } from '../scenes';
import { Tile } from '../../objects/tile';
import { createKeyBindings } from './keyBindings';
import { MapTile } from '../../types';

const tile: MapTile = {
  type: 'tile',
};

const map: MapTile[][] = [];

const mapSize = 32;

for (let i = 0; i < mapSize; i++) {
  map.push([]);
  for (let j = 0; j < mapSize; j++) {
    map[i].push({ ...tile });
  }
}

console.log({ map });

export default class MainScene extends Phaser.Scene {
  keyBindings;
  ui;

  constructor() {
    super({ key: scenesRegister.MainScene });
  }

  create() {
    this.keyBindings = createKeyBindings(this);
    // this.ui = createUI(this);

    this.createTiles();

    this.keyBindings.bindKeys();
  }

  createTiles() {
    const mapTopY = 100;
    const mapTopX = this.cameras.main.width / 2;

    map.forEach((row, rowIndex) => {
      const rowTopX = mapTopX - rowIndex * 32;
      const rowTopY = mapTopY + rowIndex * 16;

      row.forEach((mapTile, index) => {
        const x = rowTopX + 32 * index;
        const y = rowTopY + 16 * index;
        const zIndex = (rowIndex + index + 1) * 10;

        const tile = new Tile({ scene: this, x, y, tileInfo: mapTile, zIndex });
      });
    });
  }

  update() {
    this.keyBindings.handleCameraMovement();
  }
}
