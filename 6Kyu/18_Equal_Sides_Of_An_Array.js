// https://www.codewars.com/kata/5679aa472b8f57fb8c000047

function findEvenIndex(arr) {
  if (arr.filter((_) => _ === 0).length === arr.length) return 0;
  let N = -1;
  for (let index = 0; index < arr.length; index++) {
    const left = arr.slice(0, index).reduce((a, c) => a + c, 0);
    const right = arr.slice(index + 1).reduce((a, c) => a + c, 0);
    if (left === right) {
      N = index;
      break;
    }
  }
  return N;
}

console.log(findEvenIndex([-1, 1, 0, -1, 1, 0, -1, 1, 0, 0]));
