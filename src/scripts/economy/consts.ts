export const someoneMovesIn = 0.5;

export const chance = (probability: number): boolean => {
  return Math.random() < probability;
};
