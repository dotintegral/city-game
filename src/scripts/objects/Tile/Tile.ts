import { assetsRegister } from '../../assetsRegister';
import { MapTile } from '../../types';
import { BuildEvents, createBuildEvents } from './buildEvents';
import { ZIndices } from './zIndices';

const Events = Phaser.Input.Events;

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
  scene: Phaser.Scene;
  zIndex: number;
  x: number;
  y: number;

  buildEvents: BuildEvents;

  constructor({ scene, x, y, zIndex }: TileProps) {
    const gfx = assetsRegister.tiles.green;

    super(scene, x, y, gfx);

    this.scene = scene;
    this.zIndex = zIndex;
    this.x = x;
    this.y = y;

    this.originX = 0;
    this.originY = 1;
    this.updateDisplayOrigin();
    this.setDepth(zIndex + ZIndices.tileSprite);

    this.setInteractive({
      pixelPerfect: true,
      alphaTolerance: 1,
    });

    this.buildEvents = createBuildEvents(this);

    this.on(Events.POINTER_OVER, () => {
      this.buildEvents.onPointerOver();
    });
    this.on(Events.POINTER_OUT, () => {
      this.buildEvents.onPointerOut();
    });

    this.on(Events.POINTER_DOWN, () => {
      this.buildEvents.onPointerDown();
    });

    this.scene.add.existing(this);
  }
}
