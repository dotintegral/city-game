import { assetsRegister } from '../../../../../assetsRegister';
import {
  RoadBuildable,
  buildablesRegister,
} from '../../../../../buildablesRegister';
import { setGlobalMode } from '../../../../../globalState';

export const listRoads = () => {
  const item = document.createElement('div');

  const styles = [
    `background-image: url(${assetsRegister.roads.roads})`,
    `width: 64px`,
    `height: 32px`,
    `background-position: -128px 0px`,
  ].join('; ');

  item.className = 'selectionBarItem';
  item.innerHTML = `
      <div class="selectionBarItemImage">
        <div className="selectionBarItemImageViewport" style="${styles}">
        </div>
      </div>
      <div class="selectionBarItemName">
       Road 1
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
