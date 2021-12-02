import { assetsRegister } from '../assetsRegister';

export class Tile extends Phaser.GameObjects.Image {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, assetsRegister.tiles.green);

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
  }
}
