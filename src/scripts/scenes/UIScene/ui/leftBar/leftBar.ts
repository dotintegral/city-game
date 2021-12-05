import { globalState } from '../../../../state';
import { createSelectionBar } from './selectionBar';

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

export const createLeftBar = (scene: Phaser.Scene) => {
  const leftBarWrapper = document.createElement('div');
  leftBarWrapper.className = 'leftMenuWrapper';

  const leftBarElement = document.createElement('div');
  leftBarElement.className = 'leftMenu';

  leftBarElement.appendChild(
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

  leftBarElement.appendChild(
    createButton({ name: 'tbd', caption: 'TBD', callback: () => {} })
  );

  leftBarWrapper.appendChild(leftBarElement);
  leftBarWrapper.appendChild(createSelectionBar());

  const leftBarDom = scene.add.dom(0, 100, leftBarWrapper);
  leftBarDom.originX = 0;
  leftBarDom.originY = 0;
};
