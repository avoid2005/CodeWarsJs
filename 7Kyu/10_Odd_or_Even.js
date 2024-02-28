// https://www.codewars.com/kata/5949481f86420f59480000e7

function oddOrEven(array) {
  if (array.length === 0) return "even";
  const sum = array.reduce((a, c) => a + c, 0);
  return sum % 2 === 0 || sum % 2 === -0 ? "even" : "odd";
}
