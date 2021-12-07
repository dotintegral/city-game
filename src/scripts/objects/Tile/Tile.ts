import { assetsRegister } from '../../assetsRegister';
import { BuildEvents, createBuildEvents } from './buildEvents';
import { BuildRoadsEvents, createBuildRoadsEvents } from './buildRoadsEvents';
import { createDemolishEvents, DemolishEvents } from './demolishEvents';
import { ZIndices } from './zIndices';

const Events = Phaser.Input.Events;

type TileProps = {
  scene: Phaser.Scene;
  x: number;
  y: number;
  row: number;
  column: number;
  zIndex: number;
};

export class Tile extends Phaser.GameObjects.Image {
  selection: Phaser.GameObjects.Image | undefined;
  overlay: Phaser.GameObjects.Image | undefined;
  content: Phaser.GameObjects.Image | undefined;
  scene: Phaser.Scene;
  zIndex: number;
  x: number;
  y: number;
  row: number;
  column: number;

  buildEvents: BuildEvents;
  demolishEvents: DemolishEvents;
  buildRoadsEvents: BuildRoadsEvents;

  constructor({ scene, x, y, zIndex, row, column }: TileProps) {
    const gfx = assetsRegister.tiles.green;

    super(scene, x, y, gfx);

    this.scene = scene;
    this.zIndex = zIndex;
    this.x = x;
    this.y = y;
    this.row = row;
    this.column = column;

    this.originX = 0;
    this.originY = 1;
    this.updateDisplayOrigin();
    this.setDepth(zIndex + ZIndices.tileSprite);

    this.setInteractive({
      pixelPerfect: true,
      alphaTolerance: 1,
    });

    this.buildEvents = createBuildEvents(this);
    this.demolishEvents = createDemolishEvents(this);
    this.buildRoadsEvents = createBuildRoadsEvents(this);

    this.on(Events.POINTER_OVER, () => {
      this.buildEvents.onPointerOver();
      this.demolishEvents.onPointerOver();
      this.buildRoadsEvents.onPointerOver();
    });
    this.on(Events.POINTER_OUT, () => {
      this.buildEvents.onPointerOut();
      this.demolishEvents.onPointerOut();
      this.buildRoadsEvents.onPointerOut();
    });

    this.on(Events.POINTER_DOWN, () => {
      this.buildEvents.onPointerDown();
      this.demolishEvents.onPointerDown();
      this.buildRoadsEvents.onPointerDown();
    });

    this.scene.add.existing(this);
  }
}
