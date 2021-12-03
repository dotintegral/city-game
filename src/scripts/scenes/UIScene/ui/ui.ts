const createLeftBar = () => {
  const element = document.createElement('div');

  element.className = 'leftMenu';
  element.innerHTML = `
  <div class="leftMenuButton">
    Build
  </div>
  <div class="leftMenuButton disabled">
    TBD
  </div>
  `;

  return element;
};

export const createUI = (scene: Phaser.Scene) => {
  return {
    create: () => {
      const leftBar = createLeftBar();

      const leftBarDom = scene.add.dom(0, 100, leftBar);
      leftBarDom.originX = 0;
      leftBarDom.originY = 0;
    },
  };
};
