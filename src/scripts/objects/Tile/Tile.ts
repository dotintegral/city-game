import { assetsRegister } from '../../assetsRegister';
import { createBuildEvents } from './eventHandlers/buildEvents';
import { createBuildRoadsEvents } from './eventHandlers/buildRoadsEvents';
import { createDemolishEvents } from './eventHandlers/demolishEvents';
import { EventHandler, TileContent } from './types';
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

  eventHandlers: EventHandler[];

  tileContent: TileContent;

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

    this.eventHandlers = [
      createBuildEvents(this),
      createDemolishEvents(this),
      createBuildRoadsEvents(this),
    ];

    this.on(Events.POINTER_OVER, () => {
      this.eventHandlers.forEach((e) => e.onPointerOver());
    });
    this.on(Events.POINTER_OUT, () => {
      this.eventHandlers.forEach((e) => e.onPointerOut());
    });

    this.on(
      Events.POINTER_DOWN,
      (event: Phaser.Input.Pointer, clickX: number, clickY: number) => {
        this.eventHandlers.forEach((e) =>
          e.onPointerDown(event, clickX, clickY)
        );
      }
    );

    this.scene.add.existing(this);
  }
}
