import { globalState } from '../../../state';

type CreateButtonProps = {
  name: string;
  caption: string;
  callback: () => void;
};

const createButton = ({ name, caption, callback }: CreateButtonProps) => {
  const element = document.createElement('div');
  element.className = 'leftMenuButton';
  element.innerText = caption;

  element.addEventListener('click', callback);

  return element;
};

const createLeftBar = () => {
  const element = document.createElement('div');
  element.className = 'leftMenu';

  element.appendChild(
    createButton({
      name: 'build',
      caption: 'Build',
      callback: () => {
        if (globalState.mode !== 'build') {
          globalState.mode = 'build';
        } else {
          globalState.mode = 'view';
        }
      },
    })
  );
  element.appendChild(
    createButton({ name: 'tbd', caption: 'TBD', callback: () => {} })
  );

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
