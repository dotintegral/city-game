import { FpsText } from '../../objects/fpsText';

export const createUiCamera = (scene: Phaser.Scene) => {
  const uiCamera = scene.cameras.add(0, 0, 1280, 720);

  const fps = new FpsText(scene);

  scene.cameras.main.ignore([fps]);

  const ignore = (item: any) => {
    uiCamera.ignore(item);
  };

  const update = () => {
    fps.update();
  };

  return { ignore, update };
};
