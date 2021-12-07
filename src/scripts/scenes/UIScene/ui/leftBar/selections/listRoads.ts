import {
  Buildable,
  buildablesRegister,
} from '../../../../../buildablesRegister';
import { setGlobalMode } from '../../../../../globalState';

export const listRoads = () => {
  const keys = Object.keys(buildablesRegister.roads);
  const items = keys.map((key) => {
    const buildable: Buildable = buildablesRegister.roads[key];

    const item = document.createElement('div');

    item.className = 'selectionBarItem';
    item.innerHTML = `
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
