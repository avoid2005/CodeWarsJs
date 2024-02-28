// https://www.codewars.com/kata/576bb71bbbcf0951d5000044

function countPositivesSumNegatives(input) {
  if (input === null || !input.length) return [];
  const positives = [];
  const negatives = [];
  input.forEach((num) => {
    if (num > 0) positives.push(num);
    if (num < 0) negatives.push(num);
  });
  const left = positives.length;
  const right = negatives.reduce((a, c) => a + c, 0);
  return [left, right];
}
