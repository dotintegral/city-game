import { setGlobalMode } from '../../../../globalState';
import { listBuildings } from './selections/listBuildings';
import { listRoads } from './selections/listRoads';

let selectionBar;

const clearSelectionBar = () => {
  const container = document.querySelector('.selectionBarContainer');
  if (container) {
    container.innerHTML = '';
  }
};

const createTitleBar = (name: string) => {
  const titleBar = document.createElement('div');
  titleBar.className = 'selectionBarTitleBar';

  const title = document.createElement('div');
  title.className = 'selectionBarTitleBarTitle';
  title.innerText = name;

  const closeButton = document.createElement('div');
  closeButton.className = 'selectionBarTitleBarCloseButton';
  closeButton.innerText = 'X';

  closeButton.addEventListener('click', () => {
    clearSelectionBar();
    setGlobalMode({ mode: 'view' });
  });

  titleBar.appendChild(title);
  titleBar.appendChild(closeButton);

  return titleBar;
};

type SelectionBarType = 'build' | 'roads';

const openSelectionBar = (type: SelectionBarType) => {
  clearSelectionBar();
  const sectionBar = document.createElement('div');
  sectionBar.className = 'selectionBar';

  const titleBar = createTitleBar(type);
  sectionBar.appendChild(titleBar);

  if (type === 'build') {
    const content = listBuildings();
    sectionBar.appendChild(content);
  }
  if (type === 'roads') {
    const content = listRoads();
    sectionBar.appendChild(content);
  }

  const container = document.querySelector('.selectionBarContainer');
  container?.appendChild(sectionBar);
};

export const createSelectionBar = () => {
  const selectionBarContainer = document.createElement('div');
  selectionBarContainer.className = 'selectionBarContainer';

  return {
    selectionBarContainer,
    openSelectionBar: openSelectionBar,
    closeSelectionBar: clearSelectionBar,
  };
};
