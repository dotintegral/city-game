import { assetsRegister } from '../assetsRegister';
import { globalState } from '../state';
import { MapTile } from '../types';

const Events = Phaser.Input.Events;

const ZIndices = {
  tileSprite: 0,
  contentSprite: 5,
  overlayBorders: 1000000,
  overlaySprite: 1000001,
};

type TileProps = {
  scene: Phaser.Scene;
  x: number;
  y: number;
  tileInfo: MapTile;
  zIndex: number;
};

export class Tile extends Phaser.GameObjects.Image {
  overlay: Phaser.GameObjects.Image | undefined;
  content: Phaser.GameObjects.Image | undefined;

  constructor({ scene, x, y, zIndex }: TileProps) {
    const gfx = assetsRegister.tiles.green;

    super(scene, x, y, gfx);

    this.originX = 0;
    this.originY = 1;
    this.updateDisplayOrigin();
    this.setDepth(zIndex + ZIndices.tileSprite);

    this.setInteractive({
      pixelPerfect: true,
      alphaTolerance: 1,
    });

    this.on(Events.POINTER_OVER, () => {
      if (globalState.mode === 'build' && this.content === undefined) {
        this.overlay = scene.add.image(x, y, assetsRegister.buildings.block1);
        this.overlay.setOrigin(0, 1);
        this.overlay.setAlpha(0.5);
        this.overlay.setDepth(zIndex + ZIndices.overlaySprite);

        // this.setTint(0x00ff00);
      }
    });
    this.on(Events.POINTER_OUT, () => {
      if (this.overlay?.destroy) {
        this.overlay.destroy();
        this.overlay = undefined;
      }

      // this.clearTint();
    });

    this.on(Events.POINTER_DOWN, () => {
      console.log('tile');
      if (globalState.mode === 'build' && this.content === undefined) {
        this.overlay?.destroy();
        this.overlay = undefined;

        this.content = scene.add.image(x, y, assetsRegister.buildings.block1);
        this.content.setOrigin(0, 1);
        this.content.setDepth(zIndex + ZIndices.contentSprite);
      }
    });

    scene.add.existing(this);
  }
}
