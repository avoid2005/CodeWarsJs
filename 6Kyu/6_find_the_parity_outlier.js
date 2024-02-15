// https://www.codewars.com/kata/5526fc09a1bbd946250002dc

function findOutlier(integers) {
  const [even, odd] = [[], []];
  integers.forEach((number) => {
    number % 2 === 0 ? even.push(number) : odd.push(number);
  });
  return even.length === 1 ? even[0] : odd[0];
}
