// https://www.codewars.com/kata/541c8630095125aba6000c00

function digitalRoot(n) {
  let result;
  const calculate = (number) => {
    result = 0;
    Array.from(`${number}`).forEach((a) => (result += parseInt(a)));
  };
  calculate(n);
  while (result > 9) calculate(result);
  return result;
}
