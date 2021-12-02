import { assetsRegister } from '../assetsRegister';
import { MapTile } from '../types';

export class Tile extends Phaser.GameObjects.Image {
  constructor(scene: Phaser.Scene, x: number, y: number, tileInfo: MapTile) {
    const gfx = assetsRegister.tiles.green;

    super(scene, x, y, gfx);

    this.originX = 0;
    this.originY = 1;
    this.updateDisplayOrigin();

    // this.setInteractive({
    //   pixelPerfect: true,
    //   alphaTolerance: 1,
    // })
    //   .on('pointerover', () => {
    //     this.alpha = 0.5;
    //   })
    //   .on('pointerout', () => {
    //     this.alpha = 1;
    //   });
    scene.add.existing(this);

    if (tileInfo.type === 'building') {
      const building = scene.add.image(x, y, assetsRegister.buildings.house1);
      building.originX = 0;
      building.originY = 1;

      building.updateDisplayOrigin();

      // @ts-ignore
      scene.uiCamera.ignore(building);
    }
  }
}
