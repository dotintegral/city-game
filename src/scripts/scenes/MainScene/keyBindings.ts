const cameraSpeed = 10;
const zoomLevel = 0.1;
const minZoomLevel = 0.2;
const maxZoomLevel = 2;

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

    scene.input.on('wheel', (pointer, currentlyOver, dx, dy, dz, event) => {
      if (dy > 0) {
        if (scene.cameras.main.zoom > minZoomLevel) {
          scene.cameras.main.zoom -= zoomLevel;
        }
      } else if (dy < 0) {
        if (scene.cameras.main.zoom < maxZoomLevel) {
          scene.cameras.main.zoom += zoomLevel;
        }
      }
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
