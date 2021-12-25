import { globalState } from '../../../../globalState';

const createItems = () => {
  const dateItem = document.createElement('div');
  dateItem.className = 'bottomBarDateItem';

  const populationItem = document.createElement('div');
  populationItem.className = 'bottomBarPopulationItem';

  const moneyItem = document.createElement('div');
  moneyItem.className = 'bottomBarMoneyItem';

  return [dateItem, populationItem, moneyItem];
};

const moneyFormatter = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR',
});

const dateFormatter = new Intl.DateTimeFormat('de-DE');

const updateItems = () => {
  const dateItem = document.querySelector('.bottomBarDateItem') as Element;
  const date = globalState.details.date;
  dateItem.textContent = dateFormatter.format(date);

  const populationItem = document.querySelector(
    '.bottomBarPopulationItem'
  ) as Element;
  const { capacity, population } = globalState.resources;
  populationItem.textContent = `🧑 ${population}/${capacity}`;

  const moneyItem = document.querySelector(
    '.bottomBarMoneyItem'
  ) as HTMLDivElement;
  const money = globalState.resources.money;
  const color = globalState.resources.money < 0 ? '#f01010' : '#10d010';
  moneyItem.textContent = moneyFormatter.format(money);
  moneyItem.style.color = color;
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
