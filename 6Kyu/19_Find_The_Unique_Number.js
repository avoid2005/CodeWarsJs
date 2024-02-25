// https://www.codewars.com/kata/585d7d5adb20cf33cb000235

function findUniq(arr) {
  const arrOccurs = {};
  arr.forEach((item) => (arrOccurs[item] = 0));
  arr.forEach((item) => (arrOccurs[item] += 1));
  const unique = Object.entries(arrOccurs).find((number) => number[1] === 1);
  return Number(unique[0]);
}
findUniq([1, 0, 0, 0, 0, 0, 0, 0]);
