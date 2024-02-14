// https://www.codewars.com/kata/517abf86da9663f1d2000003

function toCamelCase(str) {
  const strArr = str.replaceAll("_", "-").split("-");
  const cameledArr = strArr.map((word, index) => {
    return index > 0
      ? word[0].toUpperCase() + word.slice(1).toLowerCase()
      : word;
  });
  return cameledArr.join("");
}
