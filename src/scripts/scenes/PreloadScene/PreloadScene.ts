import { assetsRegister } from '../../assetsRegister';
import { scenesRegister } from '../scenes';

export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: scenesRegister.PreloadScene });
  }

  preload() {
    this.load.image(assetsRegister.tiles.green, assetsRegister.tiles.green);
    this.load.image(assetsRegister.tiles.yellow, assetsRegister.tiles.yellow);
    this.load.image(
      assetsRegister.tiles.selection,
      assetsRegister.tiles.selection
    );

    this.load.image(
      assetsRegister.buildings.house1,
      assetsRegister.buildings.house1
    );
    this.load.image(
      assetsRegister.buildings.block1,
      assetsRegister.buildings.block1
    );

    this.load.spritesheet(
      assetsRegister.roads.roads,
      assetsRegister.roads.roads,
      {
        frameWidth: 64,
        frameHeight: 32,
      }
    );
  }

  create() {
    this.scene.start(scenesRegister.MainScene);
    this.scene.start(scenesRegister.UIScene);

    /**
     * This is how you would dynamically import the mainScene class (with code splitting),
     * add the mainScene to the Scene Manager
     * and start the scene.
     * The name of the chunk would be 'mainScene.chunk.js
     * Find more about code splitting here: https://webpack.js.org/guides/code-splitting/
     */
    // let someCondition = true
    // if (someCondition)
    //   import(/* webpackChunkName: "mainScene" */ './mainScene').then(mainScene => {
    //     this.scene.add('MainScene', mainScene.default, true)
    //   })
    // else console.log('The mainScene class will not even be loaded by the browser')
  }
}
