import { globalState } from '../../../../globalState';

const createItems = () => {
  const dateItem = document.createElement('div');
  dateItem.className = 'bottomBarDateItem';

  const moneyItem = document.createElement('div');
  moneyItem.className = 'bottomBarMoneyItem';

  return [dateItem, moneyItem];
};

const updateItems = () => {
  const dateItem = document.querySelector('.bottomBarDateItem') as Element;

  const date = globalState.details.date;
  const dateString = `${date.getDate()}.${
    date.getMonth() + 1
  }.${date.getFullYear()}`;

  dateItem.textContent = dateString;

  const moneyItem = document.querySelector('.bottomBarMoneyItem') as Element;

  const money = globalState.details.money;
  const moneyString = `€${money.toFixed(2)}`;

  moneyItem.textContent = moneyString;
};

export const createBottomBar = (scene: Phaser.Scene) => {
  const bottomBar = document.createElement('div');
  bottomBar.className = 'bottomBar';

  const bottomBarWrapper = document.createElement('div');
  bottomBarWrapper.className = 'bottomBarWrapper';

  bottomBarWrapper.appendChild(bottomBar);

  const items = createItems();

  items.forEach((item) => {
    bottomBar.appendChild(item);
  });

  const bottomBarDom = scene.add.dom(140, 700, bottomBarWrapper);
  bottomBarDom.originX = 0;
  bottomBarDom.originY = 0;

  updateItems();

  setInterval(updateItems, 500);
};
