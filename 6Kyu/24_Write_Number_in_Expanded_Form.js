// https://www.codewars.com/kata/5842df8ccbd22792a4000245

function expandedForm(num) {
  let expand = [];
  let currentNum = num;
  const divBy = (numb) => 10 ** (`${numb}`.length - 1);
  while (currentNum > 9) {
    const result = currentNum % divBy(currentNum);
    expand.push(currentNum - result);
    currentNum = result;
  }
  currentNum === 0 ? undefined : expand.push(currentNum);
  return expand.join(" + ");
}

console.log(expandedForm(70304));
