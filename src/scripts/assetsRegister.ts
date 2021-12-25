type AssetData = {
  name: string;
  src: string;
  framwWidth: number;
  frameHeight: number;
};

export const assetsRegister = {
  tiles: {
    green: 'assets/tiles/green.png',
    yellow: 'assets/tiles/yellow.png',
    selection: 'assets/tiles/selection.png',
  },
  buildings: {
    house1: 'assets/buildings/house1.png',
    block1: 'assets/buildings/block1.png',
  },
  roads: {
    roads: 'assets/tiles/roads.png',
  },
};
