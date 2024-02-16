// https://www.codewars.com/kata/525f50e3b73515a6db000b83
// don't make it difficult for yourself

function createPhoneNumber(numbers) {
  const [a, b, c, d, e, f, g, h, i, j] = numbers;
  return `(${a}${b}${c}) ${d}${e}${f}-${g}${h}${i}${j}`;
}
