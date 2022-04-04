export const random = (
  min: number,
  max: number,
  select?: 'odd' | 'even'
): number => {
  let arr = [];

  for (let i = min; i <= max; i++) {
    arr.push(i);
  }

  if (select === 'odd') {
    arr = arr.filter((n) => n % 2 === 1);
  }

  if (select === 'even') {
    arr = arr.filter((n) => n % 2 === 0);
  }

  return arr[Math.floor(Math.random() * arr.length)];
};
