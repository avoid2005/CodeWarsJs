// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

function persistence(num) {
  if (num < 9) return 0;
  let currentNum = num;
  let occurs = 0;
  while (true) {
    const numArr = Array.from(`${currentNum}`);
    let result = 1;
    numArr.forEach((num) => {
      result *= num;
      currentNum = result;
    });
    occurs += 1;
    if (result < 9) break;
  }
  return occurs;
}
