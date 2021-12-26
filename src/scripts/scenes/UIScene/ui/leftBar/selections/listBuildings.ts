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

    const styles = [
      `background-image: url(${buildable.sprite.src})`,
      `width: ${buildable.sprite.frameWidth}px`,
      `height: ${buildable.sprite.frameHeight}px`,
    ].join('; ');

    item.className = 'selectionBarItem';
    item.innerHTML = `
      <div class="selectionBarItemImage">
        <div className="selectionBarItemImageViewport" style="${styles}">
        </div>
      </div>
      <div class="selectionBarItemName">
        ${buildable.name}
      </div>
    `;

    item.addEventListener('click', () => {
      setGlobalMode({
        mode: 'build',
        data: { buildable, rotation: 0 },
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
