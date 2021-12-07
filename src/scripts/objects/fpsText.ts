export class FpsText extends Phaser.GameObjects.Text {
  constructor(scene) {
    super(scene, 10, 10, '', { color: 'black', fontSize: '18px' });
    scene.add.existing(this);
    this.setOrigin(0);
  }

  public update() {
    this.setText(`${Math.floor(this.scene.game.loop.actualFps)} fps`);
  }
}
