// https://www.codewars.com/kata/56269eb78ad2e4ced1000013

function findNextSquare(sq) {
  let result = -1;
  let i = 1;
  for (i; result <= sq; i += 1) {
    result = i * i;
  }
  console.log(result);
  if (result === sq) return (i - 1) * (i - 1);
  else return -1;
}

console.log(findNextSquare(155));
