export const shuffle = <T>(arr: T[]): T[] => {
  const randomNumbers = Array.from({ length: arr.length }, () => Math.random());
  const randomIndices = randomNumbers
    .map((v, i) => [v, i])
    .sort()
    .map((a) => a[1]);
  return randomIndices.map((v) => arr[v]);
};
