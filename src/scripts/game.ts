import 'phaser';
import MainScene from './scenes/MainScene/MainScene';
import PreloadScene from './scenes/PreloadScene/PreloadScene';
import UIScene from './scenes/UIScene/UIScene';

const DEFAULT_WIDTH = 1280;
const DEFAULT_HEIGHT = 720;

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  backgroundColor: '#303030',
  dom: {
    createContainer: true,
  },
  parent: 'phaser-game',
  scale: {
    parent: 'phaser-game',
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT,
  },
  scene: [PreloadScene, MainScene, UIScene],
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
      gravity: { y: 1000 },
    },
  },
};

window.addEventListener('load', () => {
  const game = new Phaser.Game(config);
});
