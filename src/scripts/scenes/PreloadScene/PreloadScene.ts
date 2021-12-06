import { assetsRegister } from '../../assetsRegister';
import { scenesRegister } from '../scenes';
import { flattenAssets } from './assets.helper';

export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: scenesRegister.PreloadScene });
  }

  preload() {
    const allAssets = flattenAssets(assetsRegister);

    allAssets.forEach((assetPath) => {
      this.load.image(assetPath, assetPath);
    });

    this.load.spritesheet('roads', 'assets/tiles/roads.png', {
      frameWidth: 64,
      frameHeight: 32,
    });
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
