export function randomInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomFloat(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

type Options = {
  range: number;
  max: number;
  min: number;
};

export function randomizeNextNumber(current: number, options: Options) {
  const step = randomFloat(0, options.range);
  const upperNext = current + step;
  const lowerNext = current - step;
  const possibilities = [upperNext, lowerNext];

  const possibility = possibilities[randomInteger(0, 1)];
  const otherPossibility =
    possibilities.find(p => p !== possibility) ?? current;

  if (possibility > options.max) {
    return Math.min(options.max, otherPossibility);
  }
  if (possibility < options.min) {
    return Math.max(options.min, otherPossibility);
  }

  return possibility;
}
