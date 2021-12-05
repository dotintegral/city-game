import { Buildable, buildablesRegister } from '../../../../buildablesRegister';

const listBuildings = () => {
  const keys = Object.keys(buildablesRegister.buildings);
  const items = keys.map((key) => {
    const buildable: Buildable = buildablesRegister.buildings[key];

    return `
    <div class="selectionBarItem">
      <div class="selectionBarItemImage" style="background-image: url(${buildable.sprite})">
      </div>
      <div class="selectionBarItemName">
        ${buildable.name}
      </div>
    </div>
    `;
  });

  return items.join('');
};

export const createSelectionBar = () => {
  const element = document.createElement('div');
  element.className = 'selectionBar';
  element.innerHTML = listBuildings();

  return element;
};
