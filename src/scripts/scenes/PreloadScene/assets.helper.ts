export const flattenAssets = (assets: object): string[] => {
  const keys = Object.keys(assets);

  const result = keys.flatMap((key) => {
    const asset = assets[key];

    if (typeof asset === 'object') {
      return flattenAssets(asset);
    }

    return asset;
  });

  return result;
};
