// https://www.codewars.com/kata/5287e858c6b5a9678200083c

function narcissistic(value) {
  const valueArr = Array.from(`${value}`);
  const valueDigits = valueArr.length;
  const sumValuePowerDigits = valueArr
    .map((num) => {
      return Number(num) ** valueDigits;
    })
    .reduce((a, c) => a + c);
  if (sumValuePowerDigits === value) return true;
  else return false;
}
