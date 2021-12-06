import { Buildable, buildablesRegister } from '../../../../buildablesRegister';
import { setGlobalState } from '../../../../globalState';

let selectionBar;

const listBuildings = () => {
  const keys = Object.keys(buildablesRegister.buildings);
  const items = keys.map((key) => {
    const buildable: Buildable = buildablesRegister.buildings[key];

    const item = document.createElement('div');

    item.className = 'selectionBarItem';
    item.innerHTML = `
      <div class="selectionBarItemImage" style="background-image: url(${buildable.sprite})">
      </div>
      <div class="selectionBarItemName">
        ${buildable.name}
      </div>
    `;

    item.addEventListener('click', () => {
      setGlobalState({
        mode: 'build',
        data: { buildable },
      });
    });

    return item;
  });

  const content = document.createElement('div');
  content.className = 'selectionBarContent';

  items.forEach((item) => {
    content.appendChild(item);
  });

  return content;
};

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
    setGlobalState({ mode: 'view' });
  });

  titleBar.appendChild(title);
  titleBar.appendChild(closeButton);

  return titleBar;
};

const createOpenBuildMenu = () => {
  clearSelectionBar();
  const sectionBar = document.createElement('div');
  sectionBar.className = 'selectionBar';

  const titleBar = createTitleBar('Build');
  sectionBar.appendChild(titleBar);

  const content = listBuildings();
  sectionBar.appendChild(content);

  const container = document.querySelector('.selectionBarContainer');
  container?.appendChild(sectionBar);
};

export const createSelectionBar = () => {
  const selectionBarContainer = document.createElement('div');
  selectionBarContainer.className = 'selectionBarContainer';

  return {
    selectionBarContainer,
    openSelectionBar: createOpenBuildMenu,
    closeSelectionBar: clearSelectionBar,
  };
};
