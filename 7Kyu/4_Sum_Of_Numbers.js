// https://www.codewars.com/kata/55f2b110f61eb01779000053

const getSum = (a, b) => {
  if (a === b) return a;
  let sum = 0;
  if (a < b) {
    for (let i = a; i <= b; i++) {
      sum += i;
    }
    return sum;
  }
  if (a > b) {
    for (let i = a; i >= b; i--) {
      sum += i;
    }
    return sum;
  }
};

console.log(getSum(-1, 2));
console.log(getSum(5, -1));
