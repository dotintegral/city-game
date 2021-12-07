import {
  Buildable,
  buildablesRegister,
} from '../../../../../buildablesRegister';
import { setGlobalMode } from '../../../../../globalState';

export const listBuildings = () => {
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
      setGlobalMode({
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
