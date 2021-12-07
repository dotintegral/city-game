import { globalState, setGlobalMode } from '../../../../globalState';
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
  const { selectionBarContainer, openSelectionBar, closeSelectionBar } =
    createSelectionBar();
  const leftBarWrapper = document.createElement('div');
  leftBarWrapper.className = 'leftMenuWrapper';

  const leftBarElement = document.createElement('div');
  leftBarElement.className = 'leftMenu';

  leftBarElement.appendChild(
    createButton({
      name: 'roads',
      caption: 'Roads',
      callback: () => {
        closeSelectionBar();
        openSelectionBar('roads');
        setGlobalMode({ mode: 'view' });
      },
    })
  );

  leftBarElement.appendChild(
    createButton({
      name: 'build',
      caption: 'Build',
      callback: () => {
        closeSelectionBar();
        openSelectionBar('build');
        setGlobalMode({ mode: 'view' });
      },
    })
  );

  leftBarElement.appendChild(
    createButton({
      name: 'demolish',
      caption: 'DMLSH',
      callback: () => {
        closeSelectionBar();
        setGlobalMode({ mode: 'demolish' });
      },
    })
  );

  leftBarElement.appendChild(
    createButton({
      name: 'tbd',
      caption: 'TBD',
      callback: () => {
        closeSelectionBar();
      },
    })
  );

  leftBarWrapper.appendChild(leftBarElement);
  leftBarWrapper.appendChild(selectionBarContainer);

  const leftBarDom = scene.add.dom(0, 100, leftBarWrapper);
  leftBarDom.originX = 0;
  leftBarDom.originY = 0;
};
