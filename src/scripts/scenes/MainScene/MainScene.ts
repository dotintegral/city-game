import { scenesRegister } from '../scenes';
import { Tile } from '../../objects/tile';
import { createKeyBindings } from './keyBindings';
import { createUiCamera } from './uiCamera';

type MapTile = {
  type: 'tile';
};

const tile: MapTile = {
  type: 'tile',
};

const map: MapTile[][] = [];

const mapSize = 32;

for (let i = 0; i < mapSize; i++) {
  map.push([]);
  for (let j = 0; j < mapSize; j++) {
    map[i].push(tile);
  }
}

export default class MainScene extends Phaser.Scene {
  keyBindings;
  fps;
  uiCamera;

  constructor() {
    super({ key: scenesRegister.MainScene });
  }

  create() {
    this.uiCamera = createUiCamera(this);
    this.keyBindings = createKeyBindings(this);

    this.createTiles();

    this.keyBindings.bindKeys();
  }

  createTiles() {
    const mapTopY = 100;
    const mapTopX = this.cameras.main.width / 2;

    map.forEach((row, rowIndex) => {
      const rowTopX = mapTopX - rowIndex * 32;
      const rowTopY = mapTopY + rowIndex * 16;

      row.forEach((_, index) => {
        const x = rowTopX + 32 * index;
        const y = rowTopY + 16 * index;

        const tile = new Tile(this, x, y);
        this.uiCamera.ignore(tile);
      });
    });
  }

  update() {
    this.uiCamera.update();
    this.keyBindings.handleCameraMovement();
  }
}
