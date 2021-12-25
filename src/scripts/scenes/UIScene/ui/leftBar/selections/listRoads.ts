import {
  OldBuildable,
  buildablesRegister,
} from '../../../../../buildablesRegister';
import { setGlobalMode } from '../../../../../globalState';

export const listRoads = () => {
  const item = document.createElement('div');

  item.className = 'selectionBarItem';
  item.innerHTML = `
      <div class="selectionBarItemName">
        Road
      </div>
    `;

  item.addEventListener('click', () => {
    setGlobalMode({
      mode: 'build-road',
      data: {
        buildable: buildablesRegister.roads.road1,
      },
    });
  });

  const content = document.createElement('div');
  content.className = 'selectionBarContent';

  content.appendChild(item);

  return content;
};
