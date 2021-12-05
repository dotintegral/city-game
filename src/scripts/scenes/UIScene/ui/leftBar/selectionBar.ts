import { Buildable, buildablesRegister } from '../../../../buildablesRegister';
import { globalState } from '../../../../state';

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
      globalState.mode = 'build';
      globalState.modeData = {
        buildable,
      };
    });

    return item;
  });

  return items;
};

export const createSelectionBar = () => {
  const element = document.createElement('div');
  element.className = 'selectionBar';

  const items = listBuildings();

  items.forEach((item) => {
    element.appendChild(item);
  });

  return element;
};
