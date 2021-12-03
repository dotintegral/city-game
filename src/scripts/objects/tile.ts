import { assetsRegister } from '../assetsRegister';
import { MapTile } from '../types';

export class Tile extends Phaser.GameObjects.Image {
  constructor(scene: Phaser.Scene, x: number, y: number, tileInfo: MapTile) {
    const gfx = assetsRegister.tiles.green;

    super(scene, x, y, gfx);

    this.originX = 0;
    this.originY = 1;
    this.updateDisplayOrigin();

    this.setInteractive({
      pixelPerfect: true,
      alphaTolerance: 1,
    })
      .on('pointerover', () => {
        this.setTint(0x00ff00);
      })
      .on('pointerout', () => {
        this.clearTint();
      });

    scene.add.existing(this);

    if (tileInfo.type === 'building') {
      const building = scene.add.image(x, y, assetsRegister.buildings.house1);
      building.originX = 0;
      building.originY = 1;

      building.updateDisplayOrigin();
    }
  }
}
