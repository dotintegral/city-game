const cameraSpeed = 10;

export const createKeyBindings = (scene: Phaser.Scene) => {
  const pressedKeys: Record<string, boolean> = {};

  const bindKeys = () => {
    scene.input.keyboard
      .on('keydown', ({ key }) => {
        pressedKeys[key] = true;
      })
      .on('keyup', ({ key }) => {
        pressedKeys[key] = false;
      });
  };

  const handleCameraMovement = () => {
    if (pressedKeys['w']) {
      scene.cameras.main.scrollY -= cameraSpeed;
    } else if (pressedKeys['s']) {
      scene.cameras.main.scrollY += cameraSpeed;
    }

    if (pressedKeys['a']) {
      scene.cameras.main.scrollX -= cameraSpeed;
    } else if (pressedKeys['d']) {
      scene.cameras.main.scrollX += cameraSpeed;
    }
  };

  return {
    bindKeys,
    handleCameraMovement,
  };
};
