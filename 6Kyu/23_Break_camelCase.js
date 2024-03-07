// https://www.codewars.com/kata/5208f99aee097e6552000148

function solution(string) {
  let indexOfSpace = [];
  const stringArr = string.split("");
  stringArr.forEach((letter, i) => {
    if (letter === letter.toUpperCase()) indexOfSpace.push(i);
  });
  indexOfSpace.forEach((index, i) => {
    stringArr.splice(index + i, 0, " ");
  });
  console.log(indexOfSpace);
  return stringArr.join("");
}

console.log(solution("camelCasingTest"));
