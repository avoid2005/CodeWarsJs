// https://www.codewars.com/kata/526571aae218b8ee490006f4

var countBits = function(n) {
  const binary = n.toString(2);
  const result = `${binary}`.split("").reduce((a, c) => a + Number(c), 0);
  return result;
};

countBits(10);
