import { assetsRegister } from '../assetsRegister';
import { globalState } from '../state';
import { MapTile } from '../types';

const Events = Phaser.Input.Events;

export class Tile extends Phaser.GameObjects.Image {
  overlay: Phaser.GameObjects.Image | undefined;
  content: Phaser.GameObjects.Image | undefined;

  constructor(scene: Phaser.Scene, x: number, y: number, tileInfo: MapTile) {
    const gfx = assetsRegister.tiles.green;

    super(scene, x, y, gfx);

    this.originX = 0;
    this.originY = 1;
    this.updateDisplayOrigin();

    this.setInteractive({
      pixelPerfect: true,
      alphaTolerance: 1,
    });

    this.on(Events.POINTER_OVER, () => {
      if (globalState.mode === 'build' && this.content === undefined) {
        this.overlay = scene.add.image(x, y, assetsRegister.buildings.house1);
        this.overlay.originX = 0;
        this.overlay.originY = 1;

        this.overlay.updateDisplayOrigin();
        this.overlay.alpha = 0.5;

        this.setTint(0x00ff00);
      }
    });
    this.on(Events.POINTER_OUT, () => {
      if (this.overlay?.destroy) {
        this.overlay.destroy();
        this.overlay = undefined;
      }

      this.clearTint();
    });

    this.on(Events.POINTER_DOWN, () => {
      if (globalState.mode === 'build' && this.content === undefined) {
        this.overlay?.destroy();
        this.overlay = undefined;

        this.content = scene.add.image(x, y, assetsRegister.buildings.house1);
        this.content.originX = 0;
        this.content.originY = 1;

        this.content.updateDisplayOrigin();
      }
    });

    scene.add.existing(this);

    if (tileInfo.type === 'building') {
    }
  }
}
