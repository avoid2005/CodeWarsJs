// https://www.codewars.com/kata/5a00e05cc374cb34d100000d

const reverseSeq = (n) => {
  return [...Array(n).keys()].reverse().map((num) => num + 1);
};
