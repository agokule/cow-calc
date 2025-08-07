export function round(num: number, decimalPlaces: number = 0): number {
  return Math.round(num * (10 ** decimalPlaces)) / (10 ** decimalPlaces);
};

